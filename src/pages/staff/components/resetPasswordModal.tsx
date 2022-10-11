import { Input, message, Modal, ModalProps } from "antd";
import { useState } from "react";

export default function ResetPasswordModal({
  onFinish,
  ...props
}: { onFinish: (v: string) => void } & ModalProps) {
  const [value, setValue] = useState("");
  return (
    <Modal
      destroyOnClose
      title="Reset Password"
      {...props}
      onOk={() => {
        if (!value) {
          return message.error("Please input new password");
        }
        onFinish(value);
      }}
    >
      <Input
        type="password"
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        placeholder="please input new password"
      />
    </Modal>
  );
}
