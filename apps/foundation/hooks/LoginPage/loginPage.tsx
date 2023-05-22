import { OButton, OForm, OInput, OSpin } from '@ocloud/ui'

import { useLoginPage } from '@/hooks/LoginPage'

import { StyledLoginPage, StyledTitle } from './styled'

const LoginPage = () => {
  const { loading, handleFormSubmit } = useLoginPage()

  return (
    <StyledLoginPage>
      <OForm onFinish={handleFormSubmit}>
        <OSpin spinning={loading}>
          <StyledTitle>QMS系统</StyledTitle>
          <OForm.Item name="name" rules={[{ required: true }]}>
            <OInput placeholder="请输入用户名" />
          </OForm.Item>
          <OForm.Item name="password" rules={[{ required: true }]}>
            <OInput.Password placeholder="请输入用密码" />
          </OForm.Item>
          <OForm.Item>
            <OButton type="primary" htmlType="submit">
              登录
            </OButton>
          </OForm.Item>
        </OSpin>
      </OForm>
    </StyledLoginPage>
  )
}

export default LoginPage
