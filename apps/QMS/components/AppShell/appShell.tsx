import { FC, PropsWithChildren } from 'react'

import { useAppShell } from '@/hooks/AppShell'

import { StyledAppShell } from './styled'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  const { devModule } = useAppShell()

  return <StyledAppShell devModule={devModule}>{children}</StyledAppShell>
}

export default AppShell
