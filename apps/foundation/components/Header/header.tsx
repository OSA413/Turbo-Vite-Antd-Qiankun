import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'
import { ODropdown, OSpace } from '@ocloud/ui'

import { StyledHeader, StyledNavigation, StyledLogo, StyledMenus } from './styled'

const Header = () => {
  const items: any[] = [
    {
      key: 'zh',
      label: '中文'
    },
    {
      key: 'en',
      label: '英文'
    }
  ]

  return (
    <StyledHeader>
      <StyledNavigation>
        <StyledLogo>
          <Link to="/">
            <img src="/images/logo.png" width={96} height={25} alt="" />
          </Link>
        </StyledLogo>
        <StyledMenus>
          <li>
            <Link to="/MES/VMI">
              <span>QIM - MES</span>
            </Link>
          </li>
          <li>
            <Link to="/MES/QMS">
              <span>QIM - QMS</span>
            </Link>
          </li>
        </StyledMenus>
      </StyledNavigation>
      <div>
        <ODropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <OSpace>
              <span>中文</span>
              <DownOutlined />
            </OSpace>
          </a>
        </ODropdown>
      </div>
    </StyledHeader>
  )
}

export default Header
