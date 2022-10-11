import { Input, ModalProps } from "antd";
import type { IIp } from "./type";
import type { IUseSelectedItemRes } from "../../hooks/useSelectedItem";

import { Modal, Form } from "antd";
import { createFormItems } from "../../components/form/formConfig";

// This is for Add & Edit
export default ({
  selectedItem,
  setSelectedItem,
  ...modal
}: ModalProps & IUseSelectedItemRes<IIp>) => {
  return (
    <Modal {...modal}>
      <Form {...{ labelCol: { span: 3 } }}>
        {createFormItems([
          {
            label: "Ip",
            required: true,
            children: (
              <Input
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, ip: e.target.value })
                }
                value={selectedItem.ip}
              />
            ),
          },
          {
            label: "Desc",
            required: true,
            children: (
              <Input.TextArea
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, desc: e.target.value })
                }
                value={selectedItem.desc}
              />
            ),
          },
        ])}
      </Form>
    </Modal>
  );
};
