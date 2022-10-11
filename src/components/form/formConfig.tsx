import { Form, FormItemProps } from "antd";

export default function FormConfig() {
  return <></>;
}

export type IFormConfig = FormItemProps[];

// can do some thing like set global confim for each for item. such as allowClear
export const createFormItems = (formItems: IFormConfig) => {
  return (
    <>
      {formItems.map((item, index) => {
        if (!item) return <></>;
        return (
          <Form.Item key={index} {...item}>
            {item.children}
          </Form.Item>
        );
      })}
    </>
  );
};
