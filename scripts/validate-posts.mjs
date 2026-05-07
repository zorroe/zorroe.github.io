import process from 'node:process'
import fs from 'fs-extra'
import { globby } from 'globby'
import matter from 'gray-matter'

const postPaths = await globby(['docs/posts/**/*.md'], {
  ignore: ['node_modules'],
})
const errors = []

for (const postPath of postPaths) {
  const content = await fs.readFile(postPath, 'utf-8')
  const { data } = matter(content)

  if (!isNonEmptyString(data.title)) {
    errors.push(`${postPath}: title must be a non-empty string`)
  }

  if (!isValidDate(data.date)) {
    errors.push(`${postPath}: date must be a valid date, preferably YYYY-MM-DD`)
  }

  if (!Array.isArray(data.tags)) {
    errors.push(`${postPath}: tags must be an array`)
  }

  if ('hidden' in data && typeof data.hidden !== 'boolean') {
    errors.push(`${postPath}: hidden must be a boolean when present`)
  }

  if ('description' in data && !isNonEmptyString(data.description)) {
    errors.push(`${postPath}: description must be a non-empty string when present`)
  }

  if ('cover' in data && !isNonEmptyString(data.cover)) {
    errors.push(`${postPath}: cover must be a non-empty string when present`)
  }
}

if (errors.length > 0) {
  console.error('Post metadata validation failed:\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Validated ${postPaths.length} post metadata file${postPaths.length === 1 ? '' : 's'}.`)

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isValidDate(value) {
  if (!value) {
    return false
  }

  const parsedDate = new Date(value)
  return !Number.isNaN(parsedDate.getTime())
}
