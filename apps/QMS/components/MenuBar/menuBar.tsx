import { memo } from 'react'
import { Link } from 'react-router-dom'

import { OMenu } from '@ocloud/ui'

const MenuBar = () => {
  const items: any[] = [
    {
      key: 'general',
      label: '基础设置',
      children: [
        {
          key: 'qualityPlan',
          url: '/setting/qualityPlan',
          label: (
            <Link to="/setting/qualityPlan" title="检验项目">
              <span>检验项目</span>
            </Link>
          )
        },
        {
          key: 'checktools',
          url: '/setting/checktools',
          label: (
            <Link to="/setting/checktools" title="检验工具">
              <span>检验工具</span>
            </Link>
          )
        },
        {
          key: 'sampleProgramme',
          url: '/setting/SampleProgramme',
          label: (
            <Link to="/setting/SampleProgramme" title="抽检方案">
              <span>抽检方案</span>
            </Link>
          )
        }
      ]
    },
    {
      key: 'oqc',
      label: '退货质检',
      children: [
        {
          key: 'returnRegoods',
          url: '/OQC/returnRegoods',
          label: (
            <Link to="/OQC/returnRegoods" title="退货待检">
              <span>退货待检</span>
            </Link>
          )
        },
        {
          key: 'returnCheck',
          url: '/OQC/returnCheck',
          label: (
            <Link to="/OQC/returnCheck" title="退货质检">
              <span>退货质检</span>
            </Link>
          )
        },
        {
          key: 'returnRecord',
          url: '/OQC/returnRecord',
          label: (
            <Link to="/OQC/returnRecord" title="退货质检记录">
              <span>退货质检记录</span>
            </Link>
          )
        },
        {
          key: 'returnList',
          url: '/OQC/returnList',
          label: (
            <Link to="/OQC/returnList" title="退货单列表">
              <span>退货单列表</span>
            </Link>
          )
        }
      ]
    }
  ]

  return (
    <div>
      <OMenu mode="inline" items={items} />
    </div>
  )
}

export default memo(MenuBar)
