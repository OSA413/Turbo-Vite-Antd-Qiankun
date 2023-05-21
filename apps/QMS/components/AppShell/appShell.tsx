import { FC, PropsWithChildren } from 'react'

import { useAppShell } from '@/hooks/AppShell'

import { StyledAppShell } from './styled'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  useAppShell()

  return (
    <>
      <StyledAppShell>{children}</StyledAppShell>
    </>
  )
}

export default AppShell
