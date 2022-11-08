import type { ConfigProviderProps } from "antd/lib/config-provider"
import { ConfigProvider } from "antd"
import { useThemeContext } from "./theme"
import { getPopupContainer } from "../config/antd"

export const AntdConfigProvider = ({ children, locale }: ConfigProviderProps) => {
  const { theme } = useThemeContext()
  ConfigProvider.config({
    theme: {
      primaryColor: theme.primaryColor,
    },
  })
  return (
    <ConfigProvider locale={locale} getPopupContainer={getPopupContainer}>
      {children}
    </ConfigProvider>
  )
}
