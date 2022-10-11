import { Layout } from "antd";
import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context";
import { ILayoutClass } from "./utils";
import { Sider, Header, Content, Footer } from "./layoutComponents";

export default function MixLayout() {
  const { theme } = useThemeContext();
  const { fixedHeader, showTags, collapsed, menuStyle, menuStyleBgColor } =
    theme;

  const layoutClass: ILayoutClass = useMemo(() => {
    const { fixedHeader, contentWidth } = theme;
    let content = "m-4";
    const sider = "";
    let header = "";
    let headerWrapper = "";
    header += "p-0 w-full flex justify-between items-center bg-white pr-5";
    //
    content += (contentWidth == "fixed" && " mx-auto px-4") || "";
    content += (contentWidth == "fixed" && " xl:w-[1200px]") || "";

    if (!fixedHeader) return { sider, content, header, headerWrapper };
    // fixedheader
    headerWrapper += "z-50 fixed top-0 w-full";
    return { sider, content, header, headerWrapper };
  }, [theme]);
  return (
    <Layout style={{ height: "100%" }}>
      <Header
        headerWrapperClass={layoutClass.headerWrapper}
        className={layoutClass.header}
      />
      <Layout
        style={{
          minHeight: "max-content",
          ...(fixedHeader && {
            ...((showTags && { marginTop: 96 }) || { marginTop: 64 }),
          }),
        }}
      >
        <Sider
          className={layoutClass.sider}
          style={{
            boxShadow: "2px 0 8px 0 rgb(29 35 41 / 5%)",
            ...(fixedHeader && {
              position: "fixed",
              ...((showTags && {
                top: 96,
                height: "calc(100vh - 96px)",
              }) || { top: 64, height: "calc(100vh - 64px)" }),
            }),
            ...(menuStyle == "transparent" && {
              backgroundColor: "transparent",
            }),
            ...(menuStyle == "white" && { backgroundColor: "white" }),
            ...(menuStyle == "dark" && { backgroundColor: menuStyleBgColor }),
          }}
        />
        <Layout
          style={{
            transition: "all 0.2s",
            // backgroundColor: "transparent",
            ...(fixedHeader && {
              position: "fixed",
              overflow: "scroll",
              ...((collapsed && {
                width: "calc(100% - 80px + 16px)",
                marginLeft: 80,
              }) || {
                width: "calc(100% - 200px + 16px)",
                marginLeft: 200,
              }),
              ...((showTags && {
                top: 96,
                height: "calc(100vh - 96px + 16px)",
              }) || { top: 64, height: "calc(100vh - 64px + 16px)" }),
            }),
          }}
        >
          <Content className={`${layoutClass.content} min-h-max`}>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}
