import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/MES/QMS">OIM - QMS</Link>
      {children}
    </div>
  )
}

export default AppShell
