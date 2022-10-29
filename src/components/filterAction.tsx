import { Button, Form, FormItemProps } from "antd"

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
  return (
    <Form.Item {...props}>
      <div className="flex gap-1 items-center">
        <Button loading={loading} onClick={() => onReset()} className="">
          Reset
        </Button>
        <Button loading={loading} onClick={() => onQuery()} type="primary">
          Search
        </Button>
        <a className="ml-2 cursor-pointer" onClick={() => setIsExpand(!isExpand)}>
          {(showExpand && <>{(isExpand && "Collapse") || "Expand"}</>) || <></>}
        </a>
      </div>
    </Form.Item>
  )
}
