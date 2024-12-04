import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
const BreadcrumbComp = () => (
  <Breadcrumb
    className="mt-3 ms-5"
    separator=">"
    items={[
      {
        title: <HomeOutlined />,
      },
      {
        title: "User List",
        href: "",
      },
      {
        title: "User Details",
        href: "",
      },
      {
        title: "Add User",
      },
    ]}
  />
);
export default BreadcrumbComp;
