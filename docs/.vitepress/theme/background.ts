const backgroundClass = 'dynamic-background'
const blurClass = 'dynamic-background-blur'

function appendLayer(className: string, cssText: string) {
  if (document.querySelector(`.${className}`)) {
    return
  }

  const div = document.createElement('div')
  div.className = className
  div.style.cssText = cssText
  document.body.appendChild(div)
}

function dynamicBackground() {
  appendLayer(
    backgroundClass,
    'position:fixed;top:0;left:0;z-index:0;width:100%;height:100%;pointer-events:none;background: url(\'/bg.svg\') center/cover no-repeat;',
  )
  appendLayer(
    blurClass,
    'position:fixed;top:0;left:0;z-index:0;width:100%;height:100%;pointer-events:none;background:rgba(0,0,0,0);backdrop-filter: blur(8px)',
  )
}

export default dynamicBackground
