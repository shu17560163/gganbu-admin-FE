import type { LayoutProps } from "antd";
import { Layout } from "antd";
import { useThemeContext } from "../../context";
import { BackTop } from "../components";

export default function Content({ children, ...props }: LayoutProps) {
  const { theme } = useThemeContext();
  const { fixedHeader, layout } = theme;
  return (
    <>
      <Layout.Content {...props}>{children}</Layout.Content>

      {layout == "mix" && fixedHeader && <BackTop />}
    </>
  );
}
