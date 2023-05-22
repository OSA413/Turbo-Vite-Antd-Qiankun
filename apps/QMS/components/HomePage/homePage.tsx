import { OLayout } from '@ocloud/ui'

import MenuBar from '@/components/MenuBar'
import SystemShell from '@/components/SystemShell'
import { StyledMenuBar, StyledMenuLogo } from './styled'

const HomePage = () => {
  return (
    <OLayout hasSider>
      <OLayout.Sider width={230}>
        <StyledMenuBar>
          <StyledMenuLogo>QMS</StyledMenuLogo>
          <MenuBar />
        </StyledMenuBar>
      </OLayout.Sider>
      <OLayout className="site-layout">
        <OLayout.Header />
        <SystemShell />
      </OLayout>
    </OLayout>
  )
}

export default HomePage
