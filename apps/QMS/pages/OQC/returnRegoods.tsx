import { useState } from 'react'
import { OTable } from '@ocloud/ui'
import type { ColumnsType } from '@ocloud/ui'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: any = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      OTable.SELECTION_ALL,
      OTable.SELECTION_INVERT,
      OTable.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys: any) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_: any, index: number) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys: any) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changeableRowKeys.filter((_: any, index: number) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  return <OTable rowSelection={rowSelection} columns={columns} dataSource={data} />
}

export default App
