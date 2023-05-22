import { Outlet } from 'react-router-dom'
import { OLayout } from '@ocloud/ui'

import { StyledMainContent } from './styled'

const SystemShell = () => {
  return (
    <StyledMainContent>
      <OLayout.Content>
        <div style={{ height: '2000px' }}>
          <Outlet />
        </div>
      </OLayout.Content>
    </StyledMainContent>
  )
}

export default SystemShell
