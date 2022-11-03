import { Input, Select } from "antd"

import { Card, Table, Tag } from "antd"
import { useState } from "react"
import FilterAction from "../../components/filterAction"
import { useDebounceEffect } from "ahooks"
import { useNavigate } from "react-router-dom"
import { IFilter } from "./type"
import { useTablePagination } from "../../hooks"
import { createFormItems, IFormConfig } from "../../components/form/formConfig"
import { useTranslation } from "react-i18next"

export const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
]

const dataFromApi = Array.from({ length: 133 }).map((item, index) => {
  return {
    key: index,
    name: "John Brown" + index,
    username: "Username" + index,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  }
})

export default function OrderInfo() {
  const [filter, setFilter] = useState<IFilter>({}) //
  const { pagination, setPagination } = useTablePagination()
  const [loading, setLoading] = useState(false) // table loading

  const [data, setData] = useState([]) // table data
  const navigate = useNavigate()
  const { t } = useTranslation()

  const getInfo = async () => {
    setLoading(true)
    setTimeout(() => {
      setData(dataFromApi)
      setLoading(false)
    }, 1000)
  }

  // usePageInfoFilterEffect(filter, () => getInfo({ ...pagination, current: 1 }))
  useDebounceEffect(
    () => {
      getInfo()
    },
    [filter.name, pagination.current, pagination.pageSize],
    { wait: 800 }
  )

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Username", dataIndex: "username" },
    { title: "Address", dataIndex: "address" },
    {
      title: "Tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green"
            if (tag === "loser") {
              color = "volcano"
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div>
          <a
            onClick={() => {
              navigate("/order/orderDetail", {
                state: { id: record._id, name: "hello" },
              })
            }}
          >
            Detail
          </a>
        </div>
      ),
    },
  ].map((item) => {
    return { ...item, key: item.dataIndex }
  })

  const formConfig: IFormConfig = [
    {
      label: t("SEARCH"),
      className: "mb-0",
      children: (
        <Input
          allowClear
          value={filter.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          placeholder="search by code"
        />
      ),
    },
    {
      label: t("STATUS"),
      className: "mb-0",
      children: (
        <Select
          allowClear
          onChange={(value) => setFilter({ ...filter, status: value })}
          value={filter.status}
          options={statusOptions}
        />
      ),
    },
  ]

  return (
    <div>
      <Card className="mb-4">
        <div className="grid grid-cols-4 gap-4">
          {createFormItems(formConfig)}
          <FilterAction className="mb-0" onQuery={() => getInfo()} onReset={() => setFilter({})} />
        </div>
      </Card>
      <Card>
        <Table
          onChange={(pagination) => setPagination(pagination)}
          pagination={pagination}
          loading={loading}
          columns={columns}
          dataSource={data}
        ></Table>
      </Card>
    </div>
  )
}
