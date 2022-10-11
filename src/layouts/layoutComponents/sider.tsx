import type { SiderProps } from "antd";

import { Layout } from "antd";
import { useThemeContext } from "../../context";
import { Logo, Menu, MenuFold } from "../components";

export default function Sider(props: SiderProps) {
  const { theme } = useThemeContext();
  const { collapsed, layout, showLogo, showCollapse } = theme;
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} {...props}>
      {showLogo && layout == "side" && <Logo />}
      <Menu
        className="border-0 overflow-y-auto transition-all overflow-x-hidden"
        mode="inline"
        style={{
          backgroundColor: "transparent",
          ...((showCollapse && {
            height: "calc(100% - 40px)",
            ...(layout == "side" && {
              height: "calc(100% - 64px - 40px)",
              ...(!showLogo && {
                height: "calc(100% - 40px)",
              }),
            }),
          }) || {
            height: "calc(100%)",
            ...(layout == "side" && {
              height: "calc(100% - 64px)",
              ...(!showLogo && {
                height: "calc(100%)",
              }),
            }),
          }),
        }}
      />

      {showCollapse && <MenuFold />}
    </Layout.Sider>
  );
}
