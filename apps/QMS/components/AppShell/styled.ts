import styled from '@emotion/styled'

interface StyledAppShellProps {
  devModule: boolean
}

export const StyledAppShell = styled.section<StyledAppShellProps>`
  position: fixed;
  top: ${(props) => (props.devModule ? '50px' : '0')};
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;

  .qms-layout {
    height: 100%;
  }
`
