import type { IInfoResponce } from "../../types"
import type { IFilter, IProduct } from "./type"
import { Form, Input, TableColumnsType, TablePaginationConfig, Upload } from "antd"
import { message, Modal } from "antd"
import { Card, Table, Button, Space } from "antd"
import FilterAction from "../../components/filterAction"
import { ProductApi } from "../../api"
import {
  useData,
  useFilter,
  useLoading,
  useModal,
  usePageInfoFilterEffect,
  useSelectedItem,
  useTablePagination,
} from "../../hooks"
import { createFormItems } from "../../components/form/formConfig"
import { useNavigate } from "react-router-dom"

export default () => {
  const { filter, setFilter } = useFilter<IFilter>({})
  const { pagination, setPagination } = useTablePagination()
  const { selectedItem, setSelectedItem } = useSelectedItem<Partial<IProduct>>({})
  const { modal, setModal } = useModal({})
  const { data, setData } = useData<Partial<IProduct>[]>([])
  const { loading, setLoading } = useLoading(false)

  const navigate = useNavigate()

  const getInfo = async (paginationProp?: TablePaginationConfig) => {
    setLoading(true)
    try {
      const res: unknown = await ProductApi.getProducts({
        ...filter,
        current: paginationProp?.current || pagination.current,
        pageSize: paginationProp?.pageSize || pagination.pageSize,
      })
      const { items = [], total }: IInfoResponce = res
      setLoading(false)
      setData(items)
      setPagination({ ...pagination, ...(paginationProp || {}), total })
    } catch (error) {
      console.log(error)
    }
  }

  const handleOk = async () => {
    const { name } = selectedItem
    if (!name) {
      return message.error("Please finish all required info")
    }
    try {
      if (selectedItem._id) {
        await ProductApi.updateProduct(selectedItem._id, selectedItem)
      } else {
        await ProductApi.createProduct(selectedItem)
      }
      setModal({ ...modal, visible: false })
      await getInfo() // reget the data
    } catch (error) {
      console.log(error)
    }
  }

  usePageInfoFilterEffect(filter, () => getInfo({ ...pagination, current: 1 }))

  const columns: TableColumnsType<IProduct> = [
    { title: "Name", dataIndex: "name" },
    { title: "Desc", dataIndex: "desc" },
    { title: "Staff Count", dataIndex: "staffCount" },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <Space>
            <a
              onClick={() => {
                setSelectedItem({ ...record })
                setModal({ ...modal, visible: true, title: "Edit" })
              }}
            >
              Edit
            </a>
            <a
              className="text-red-600"
              onClick={() => {
                Modal.confirm({
                  content: "Sure to delete this item?",
                  onOk: async () => {
                    console.log(record, 111919)
                    try {
                      await ProductApi.deleteProduct(record._id)
                      await getInfo()
                    } catch (error) {
                      console.log(error)
                    }
                  },
                })
              }}
            >
              Delete
            </a>
          </Space>
        )
      },
    },
  ].map((item) => {
    return { ...item, key: item.dataIndex }
  })

  return (
    <div>
      <Card
        title="Create Product"
        className="mb-4"
        extra={
          <>
            <div className=" flex gap-2 items-center">
              <Button onClick={() => navigate(-1)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </>
        }
      >
        <Form className=" grid grid-cols-2 gap-4 w-1/2">
          {createFormItems([
            {
              label: "Name",
              required: true,
              children: <Input></Input>,
              rules: [{ required: true, message: "Please input product name" }],
            },
            {
              label: "Category",
              required: true,
              children: <Input></Input>,
              rules: [{ required: true, message: "Please input product name" }],
            },
            {
              label: "Cover",
              required: true,
              children: <Upload listType="picture-card" fileList={[]} />,
              rules: [{ required: true, message: "Please upload thumbnail" }],
            },
          ])}
        </Form>
      </Card>
    </div>
  )
}
