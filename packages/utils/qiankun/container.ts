export const createContainer = (devModule: boolean, name: string) => {
  if (!devModule) return document.head
  const qiankunShadowDom: any = document.querySelector(`div[data-name="${name}"]`)?.shadowRoot
  const targetContainer: any = qiankunShadowDom.querySelector('qiankun-head')

  return targetContainer
}
