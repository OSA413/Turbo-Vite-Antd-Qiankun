import { OApp, OButton } from '@ocloud/ui'

const Home = () => {
  const { notification } = OApp.useApp()

  const handleClick = () => {
    notification.info({
      message: `Notification topLeft`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft'
    })
  }

  return (
    <div>
      <OButton type="primary" onClick={handleClick}>
        Add
      </OButton>
    </div>
  )
}

export default Home
