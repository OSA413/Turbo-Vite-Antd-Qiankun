import createCache from '@emotion/cache'
import type { EmotionCache, Options } from '@emotion/cache'

export const createAppCache = (devModule: boolean) => {
  const cacheOptions: Options = {
    key: 'css',
    prepend: false,
    speedy: false,
    stylisPlugins: []
  }

  if (devModule) {
    const qiankunShadowDom: any = document.querySelector('div[data-name="oms__qms"]')?.shadowRoot
    const targetContainer: Node = qiankunShadowDom.querySelector('qiankun-head')
    cacheOptions.container = targetContainer
  }

  const cache: EmotionCache = createCache(cacheOptions)

  return cache
}
