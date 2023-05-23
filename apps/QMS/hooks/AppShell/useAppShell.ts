import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useCookie } from '@ocloud/hooks'

export const useAppShell = () => {
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const { pathname } = useLocation()

  const devModule: boolean = import.meta.env.REACT_DEV_MODULE
  const token: string = cookie.getItem('access_token')

  useEffect(() => {
    if (!token && pathname !== '/login') {
      navigate('/login')
    }
  }, [token, pathname])

  return {
    devModule
  }
}
