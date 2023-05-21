import { OLayout, OMenu } from '@ocloud/ui'

const HomePage = () => {
  const items: any[] = [
    {
      key: 'general',
      label: '基础设置',
      children: [
        {
          key: 'qualityPlan',
          label: '检验项目',
          url: '/setting/qualityPlan'
        },
        {
          key: 'checktools',
          label: '检验工具',
          url: '/setting/checktools'
        },
        {
          key: 'sampleProgramme',
          label: '抽检方案',
          url: '/setting/SampleProgramme'
        }
      ]
    },
    {
      key: 'oqc',
      label: '退货质检',
      children: [
        {
          key: 'returnRegoods',
          label: '退货待检',
          url: '/OQC/returnRegoods'
        },
        {
          key: 'returnCheck',
          label: '退货质检',
          url: '/OQC/returnCheck'
        },
        {
          key: 'returnRecord',
          label: '退货质检记录',
          url: '/OQC/returnRecord'
        },
        {
          key: 'returnList',
          label: '退货单列表',
          url: '/OQC/returnList'
        }
      ]
    }
  ]

  return (
    <OLayout hasSider>
      <OLayout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}>
        <div>QMS</div>
        <OMenu mode="inline" items={items} />
      </OLayout.Sider>
      <OLayout className="site-layout" style={{ marginLeft: 200 }}>
        <OLayout.Header />
        <OLayout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}></OLayout.Content>
      </OLayout>
    </OLayout>
  )
}

export default HomePage
