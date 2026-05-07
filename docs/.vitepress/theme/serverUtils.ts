import fs from 'fs-extra'
import { globby } from 'globby'
import matter from 'gray-matter'

export async function getPosts() {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      const frontMatter = normalizeFrontMatter(data)

      const postInfo: PostInfo = {
        frontMatter,
        regularPath: item.replace(/^docs\/(.*)\.md$/u, '/$1.html'),
      }

      return postInfo
    }),
  )

  return posts
    .filter(post => !post.frontMatter.hidden)
    .filter(post => !post.regularPath.includes('/index.html'))
    .sort(compareDateDesc)
}

export function getPostLength(posts: PostInfo[]) {
  return posts.length
}

function normalizeFrontMatter(data: Record<string, unknown>): FrontMatter {
  return {
    ...data,
    title: normalizeString(data.title, '未命名文章'),
    date: normalizeDate(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    categories: Array.isArray(data.categories) ? data.categories.map(String) : [],
    hidden: typeof data.hidden === 'boolean' ? data.hidden : false,
    description: normalizeOptionalString(data.description),
    cover: normalizeOptionalString(data.cover),
  }
}

function normalizeString(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function normalizeOptionalString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined
}

function normalizeDate(date: unknown) {
  const value = date || new Date().toString()
  const parsedDate = new Date(value as string)

  if (Number.isNaN(parsedDate.getTime())) {
    return new Date().toJSON().split('T')[0]
  }

  return parsedDate.toJSON().split('T')[0]
}

function compareDateDesc(postA: PostInfo, postB: PostInfo) {
  return postA.frontMatter.date < postB.frontMatter.date ? 1 : -1
}

async function getPostMDFilePaths() {
  return globby(['docs/posts/**/*.md'], {
    ignore: ['node_modules'],
  })
}
