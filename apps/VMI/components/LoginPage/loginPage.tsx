import { OButton, OForm, OInput } from '@ocloud/ui'

import { StyledLoginPage } from './styled'

const LoginPage = () => {
  const handleFormSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <StyledLoginPage>
      <OForm onFinish={handleFormSubmit}>
        <OForm.Item name="name" rules={[{ required: true }]}>
          <OInput placeholder="请输入用户名" />
        </OForm.Item>
        <OForm.Item name="password" rules={[{ required: true }]}>
          <OInput.Password placeholder="请输入用密码" />
        </OForm.Item>
        <OForm.Item name="confirm" rules={[{ required: true }]}>
          <OInput.Password placeholder="请输入用密码" />
        </OForm.Item>
        <OForm.Item>
          <OButton type="primary" htmlType="submit">
            登录
          </OButton>
        </OForm.Item>
      </OForm>
    </StyledLoginPage>
  )
}

export default LoginPage
