import type { ModalFuncProps } from "antd"

import { message, Modal, notification } from "antd"

export const getContainer = () => {
  return document.getElementById("fullscreen") || document.body
}
export const getPopupContainer = getContainer

// global config message & notification
message.config({ getContainer })
notification.config({ getContainer })

// rewrite Modal methods
const { info, success, error, warning, confirm } = Modal

Modal.info = (props: ModalFuncProps) => info({ ...props, getContainer })
Modal.success = (props: ModalFuncProps) => success({ ...props, getContainer })
Modal.error = (props: ModalFuncProps) => error({ ...props, getContainer })
Modal.warning = (props: ModalFuncProps) => warning({ ...props, getContainer })
Modal.confirm = (props: ModalFuncProps) => confirm({ ...props, getContainer })
