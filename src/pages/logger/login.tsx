import { Card, Input, Table } from "antd"
import FilterAction from "../../components/filterAction"
import { createFormItems } from "../../components/form/formConfig"
import { useData, useFilter, useLoading } from "../../hooks"

interface IFilter {
  name: string
}
const LoginLogger = () => {
  const { filter, setFilter } = useFilter<IFilter>({ name: "" })
  const { loading, setLoading } = useLoading(false)
  const { data, setData } = useData()
  const columns = [
    {
      title: "User",
      dataIndex: "username",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.username}</div>
          </div>
        )
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.name}</div>
          </div>
        )
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.name}</div>
          </div>
        )
      },
    },
    {
      title: "IP",
      dataIndex: "ip",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.name}</div>
          </div>
        )
      },
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.name}</div>
          </div>
        )
      },
    },
    {
      title: "Remark",
      dataIndex: "remark",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.name}</div>
          </div>
        )
      },
    },
  ]
  return (
    <>
      <Card className="mb-4">
        <div className="grid grid-cols-4 gap-4">
          {createFormItems([
            {
              label: "Name",
              className: "mb-0",
              children: (
                <Input
                  value={filter.name}
                  onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                  placeholder="username/name/ip"
                />
              ),
            },
          ])}
          <FilterAction className="mb-0" />
        </div>
      </Card>
      <Card>
        <Table loading={loading} columns={columns} dataSource={data} />
      </Card>
    </>
  )
}
export default LoginLogger
