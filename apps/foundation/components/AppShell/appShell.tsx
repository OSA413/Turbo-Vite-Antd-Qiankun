import { FC, PropsWithChildren } from 'react'

import Header from '@/components/Header'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AppShell
