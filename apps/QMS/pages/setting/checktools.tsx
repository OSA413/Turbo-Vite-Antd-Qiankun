import { useState } from 'react'
import { ODivider, ORadio, OTable } from '@ocloud/ui'
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
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>
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

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park'
  }
]

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}

const CheckTools = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox')

  return (
    <div>
      <ORadio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value)
        }}
        value={selectionType}>
        <ORadio value="checkbox">Checkbox</ORadio>
        <ORadio value="radio">radio</ORadio>
      </ORadio.Group>
      <ODivider />
      <OTable
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default CheckTools
