export function initTags(posts: PostInfo[]) {
  const data: Record<string, PostInfo[]> = {}

  for (const post of posts) {
    const tags = post.frontMatter.tags

    if (Array.isArray(tags)) {
      for (const tag of tags) {
        if (!data[tag]) {
          data[tag] = []
        }
        data[tag].push(post)
      }
    }
  }

  return data
}

export function useYearSort(posts: PostInfo[]) {
  const data: PostInfo[][] = []
  let year = ''

  for (const post of posts) {
    if (!post.frontMatter.date) {
      continue
    }

    const currentYear = post.frontMatter.date.split('-')[0]
    if (currentYear !== year) {
      data.push([])
      year = currentYear
    }

    data[data.length - 1].push(post)
  }

  return data
}

export function getHeaders(_range: any): Header[] {
  return [...document.querySelectorAll('.VPDoc h2,.VPDoc h3,.VPDoc h4,.VPDoc h5,.VPDoc h6')]
    .filter(el => el.id && el.hasChildNodes())
    .map((el) => {
      const level = Number(el.tagName[1])
      return {
        title: serializeHeader(el),
        link: `#${el.id}`,
        level,
      }
    })
}

function serializeHeader(h: Element): string {
  let ret = ''
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (
        (node as Element).classList.contains('VPBadge')
        || (node as Element).classList.contains('header-anchor')
      ) {
        continue
      }
      ret += node.textContent
    }
    else if (node.nodeType === 3) {
      ret += node.textContent
    }
  }
  return ret.trim()
}
