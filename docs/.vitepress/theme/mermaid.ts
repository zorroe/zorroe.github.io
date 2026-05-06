import type { MermaidConfig } from 'mermaid'

let mermaidLoader: Promise<typeof import('mermaid').default> | null = null

async function loadMermaid() {
  mermaidLoader ??= import('mermaid').then(module => module.default)
  return mermaidLoader
}

function getDiagramNodes() {
  return Array.from(
    document.querySelectorAll<HTMLElement>('.vp-doc .mermaid[data-mermaid-source]'),
  )
}

function restoreDiagramSource(node: HTMLElement) {
  const source = node.dataset.mermaidSource

  if (!source) {
    return
  }

  node.removeAttribute('data-processed')
  node.innerHTML = source
}

export async function renderMermaidDiagrams(isDark: boolean) {
  if (typeof document === 'undefined') {
    return
  }

  const diagrams = getDiagramNodes()
  if (diagrams.length === 0) {
    return
  }

  const mermaid = await loadMermaid()
  const config: MermaidConfig = {
    startOnLoad: false,
    securityLevel: 'loose',
    theme: isDark ? 'dark' : 'default',
  }

  mermaid.initialize(config)
  for (const diagram of diagrams) {
    restoreDiagramSource(diagram)
  }

  await mermaid.run({
    nodes: diagrams,
    suppressErrors: true,
  })
}
