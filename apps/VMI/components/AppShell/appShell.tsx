import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { StyledAppShell } from './styled'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <StyledAppShell>{children}</StyledAppShell>
    </>
  )
}

export default AppShell
