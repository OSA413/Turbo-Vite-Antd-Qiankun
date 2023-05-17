export const createContainer = (devModule: boolean) => {
  if (!devModule) return document.head

  const qiankunShadowDom: any = document.querySelector(
    `div[data-name="${import.meta.env.REACT_SUB_APP_NAME}"]`
  )?.shadowRoot
  const targetContainer: any = qiankunShadowDom.querySelector('qiankun-head')

  return targetContainer
}
