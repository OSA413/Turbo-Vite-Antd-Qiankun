import { CookieSerializeOptions } from 'cookie'
import nookies from 'nookies'

interface Cookie {
  setItem: (key: string, value: string, options?: CookieSerializeOptions) => void
  getItem: (key: string) => string
  hasItem: (key: string) => boolean
  removeItem: (key: string, options?: CookieSerializeOptions) => void
}

export const useCookie = () => {
  const defaultOptions: CookieSerializeOptions = {
    maxAge: 60 * 60 * 24 * 1,
    path: '/'
  }

  const cookie: Cookie = {
    setItem: (key: string, value: string, options?: CookieSerializeOptions) => {
      nookies.set(null, key, value, options || defaultOptions)
    },
    getItem: (key: string) => {
      const cookies = nookies.get()
      return cookies[key] || ''
    },
    hasItem: (key: string) => {
      const value: string = cookie.getItem(key)
      return Boolean(value) || value === ''
    },
    removeItem: (key: string, options?: CookieSerializeOptions) => {
      nookies.destroy(null, key, options || defaultOptions)
    }
  }

  return {
    cookie
  }
}

type UseCookie = typeof useCookie
export type UseCookieReturn = ReturnType<UseCookie>
