import type { LayoutProps } from "antd";
import { Layout } from "antd";

export default function Footer(props: LayoutProps) {
  return (
    <Layout.Footer {...props} style={{ textAlign: "center" }}>
      © Gganbu Admin. All rights reserved.
    </Layout.Footer>
  );
}
