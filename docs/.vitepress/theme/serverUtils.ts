import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'fs-extra'

export async function getPosts() {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item: any) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      data.date = _convertDate(data.date)
      const postInfo: PostInfo = {
        frontMatter: data as FrontMatter,
        regularPath: item.replace(/docs\/(.*).md/, '/$1.html'),
      }
      return postInfo
    }),
  )
  posts.sort(_compareDate)
  return posts
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON()
  return json_date.split('T')[0]
}

function _compareDate(obj1: PostInfo, obj2: PostInfo) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

async function getPostMDFilePaths() {
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md'],
  })
  return paths.filter(item => item.includes('posts/'))
}

export async function getPostLength() {
  // getPostMDFilePath return type is object not array
  return [...(await getPostMDFilePaths())].length
}
