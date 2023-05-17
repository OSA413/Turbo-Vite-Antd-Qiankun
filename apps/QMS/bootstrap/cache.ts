import createCache from '@emotion/cache'
import type { EmotionCache, Options } from '@emotion/cache'

export const createAppCache = (devModule: boolean, container: any) => {
  const cacheOptions: Options = {
    key: 'css',
    prepend: false,
    speedy: false,
    stylisPlugins: []
  }

  if (devModule) cacheOptions.container = container
  const cache: EmotionCache = createCache(cacheOptions)

  return cache
}
