export function initTags(post: PostInfo[]) {
  const data: { [k: string]: any[] } = {}
  for (let i = 0; i < post.length; i++) {
    const element = post[i]
    if (element.frontMatter.hidden) {
      continue
    }
    const tags = element.frontMatter.tags
    // tags是数组，需要tags按照数组语法的格式书写
    if (Array.isArray(tags)) {
      tags.forEach(item => {
        if (!data[item]) {
          data[item] = []
        }
        data[item].push(element)
      })
    }
  }
  return data
}

export function useYearSort(post: PostInfo[]) {
  const data = []
  let year = '0'
  let num = -1
  for (let index = 0; index < post.length; index++) {
    const element = post[index]
    if (element.frontMatter.date && !element.frontMatter.hidden) {
      const y = element.frontMatter.date.split('-')[0]
      if (y === year) {
        data[num].push(element)
      } else {
        num++
        data[num] = [] as any
        data[num].push(element)
        year = y
      }
    }
  }
  return data
}

export function getHeaders(range: any): Header[] {
  const headers = [...document.querySelectorAll('.VPDoc h2,h3,h4,h5,h6')]
    .filter(el => el.id && el.hasChildNodes())
    .map(el => {
      const level = Number(el.tagName[1])
      return {
        title: serializeHeader(el),
        link: '#' + el.id,
        level,
      }
    })
  return headers
}

function serializeHeader(h: Element): string {
  let ret = ''
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (
        (node as Element).classList.contains('VPBadge') ||
        (node as Element).classList.contains('header-anchor')
      ) {
        continue
      }
      ret += node.textContent
    } else if (node.nodeType === 3) {
      ret += node.textContent
    }
  }
  return ret.trim()
}
