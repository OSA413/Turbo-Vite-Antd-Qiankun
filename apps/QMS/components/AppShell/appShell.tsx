import { FC, PropsWithChildren } from 'react'
import { OButton } from '@ocloud/ui'

import { StyledAppShell } from './styled'

const AppShell: FC<PropsWithChildren> = ({ children }) => {
  // const { notification } = OApp.useApp()

  const handleClick = () => {
    // notification.info({
    //   message: `Notification topLeft`,
    //   description: 'Hello, Ant Design!!',
    //   placement: 'topLeft'
    // })
  }

  return (
    <StyledAppShell>
      {children}{' '}
      <OButton type="primary" onClick={handleClick}>
        Add
      </OButton>
    </StyledAppShell>
  )
}

export default AppShell
