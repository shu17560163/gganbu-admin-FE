import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { useThemeContext } from "./theme";
import { getPopupContainer } from "../config/antd";

export const AntdConfigProvider = (props: { children: ReactElement }) => {
  const { theme } = useThemeContext();
  ConfigProvider.config({
    theme: {
      primaryColor: theme.primaryColor,
    },
  });
  return (
    <ConfigProvider getPopupContainer={getPopupContainer}>
      {props.children}
    </ConfigProvider>
  );
};
