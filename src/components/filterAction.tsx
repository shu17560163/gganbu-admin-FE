import { Button, Form, FormItemProps } from "antd"
import { useTranslation } from "react-i18next"

export interface IFilterActionProps {
  onQuery?: () => void
  onReset?: () => void
  loading?: boolean
  showExpand?: boolean
  isExpand?: boolean
  setIsExpand?: (value?: boolean) => void
}

export default function FilterAction({
  loading,
  showExpand,
  isExpand,
  setIsExpand,
  onQuery,
  onReset,
  ...props
}: IFilterActionProps & FormItemProps) {
  const { t } = useTranslation()
  return (
    <Form.Item {...props}>
      <div className="flex gap-1 items-center">
        <Button loading={loading} onClick={() => onReset()} className="">
          {t("RESET")}
        </Button>
        <Button loading={loading} onClick={() => onQuery()} type="primary">
          {t("SEARCH")}
        </Button>
        <a className="ml-2 cursor-pointer" onClick={() => setIsExpand(!isExpand)}>
          {(showExpand && <>{(isExpand && "Collapse") || "Expand"}</>) || <></>}
        </a>
      </div>
    </Form.Item>
  )
}
