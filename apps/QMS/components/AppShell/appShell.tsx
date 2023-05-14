import { FC, PropsWithChildren } from 'react'

import { StyledAppShell } from './styled'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  return <StyledAppShell>{children}</StyledAppShell>
}

export default AppShell
