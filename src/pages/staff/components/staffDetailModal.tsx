import { Input, InputNumber, ModalProps, Select, Switch } from "antd"
import { Modal, Form } from "antd"
import { ReactNode } from "react"
import { createFormItems, IFormConfig } from "../../../components/form/formConfig"
import { IUseSelectedItemRes } from "../../../hooks/useSelectedItem"
import { IStaff } from "../type"

// This is for Add & Edit
export default ({
  selectedItem,
  setSelectedItem,
  roleOptions,
  ...modal
}: ModalProps &
  IUseSelectedItemRes<IStaff> & {
    roleOptions?: { label?: ReactNode; value?: string }[]
  }) => {
  const formConfig: IFormConfig = [
    {
      label: "Name",
      required: true,
      children: (
        <Input onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} value={selectedItem.name} />
      ),
    },
    {
      label: "Username",
      required: true,
      children: (
        <Input
          onChange={(e) => setSelectedItem({ ...selectedItem, username: e.target.value })}
          value={selectedItem.username}
        />
      ),
    },
    !selectedItem._id && {
      label: "Password",
      required: true,
      children: <Input disabled placeholder="initial password will be set 1234" />,
    },
    {
      label: "Phone",
      children: (
        <InputNumber
          className=" w-full"
          onChange={(value) => setSelectedItem({ ...selectedItem, phone: value })}
          value={selectedItem.phone}
        />
      ),
    },
    {
      label: "Role",
      required: true,
      children: (
        <Select
          className=" w-full"
          value={selectedItem.roleId}
          onChange={(value) => {
            setSelectedItem({ ...selectedItem, roleId: value })
          }}
          options={roleOptions}
        />
      ),
    },
    selectedItem._id && {
      label: "Status",
      children: (
        <Switch
          checked={selectedItem.status == "active"}
          onChange={(value) =>
            setSelectedItem({
              ...selectedItem,
              status: (value && "active") || "inactive",
            })
          }
          checkedChildren={"Active"}
          unCheckedChildren={"Inactive"}
        />
      ),
    },
  ]
  return (
    <Modal {...modal}>
      <Form {...{ labelCol: { span: 5 } }}>{createFormItems(formConfig)}</Form>
    </Modal>
  )
}
