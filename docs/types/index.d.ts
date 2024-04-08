interface Header {
  title: string
  link: string
  level: number
}

interface FrontMatter {
  title: string
  date: string
  tags: string[]
  categories: string[]
  hidden : boolean
}

interface PostInfo {
  frontMatter: FrontMatter
  regularPath: string
}
