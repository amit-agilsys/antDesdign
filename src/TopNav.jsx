import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Select, Space, Input, Tooltip, Button, Avatar, Badge } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const TopNav = () => (
  <div className="d-flex justify-content-between">
    <Space wrap>
      <Select
        defaultValue="item"
        style={{
          width: 120,
          marginLeft: "3rem",
        }}
        onChange={handleChange}
        options={[
          {
            value: "item",
            label: "item",
          },
          {
            value: "item1",
            label: "item1",
          },
          {
            value: "item2",
            label: "item2",
          },
        ]}
      />
      <Input placeholder="Search" />
      <Tooltip title="search">
        <Button icon={<SearchOutlined />} />
      </Tooltip>
    </Space>
    <div className="col-1">
      <span className="me-2 text-black">Jhon Doe</span>
      <Badge count={1}>
        <Avatar icon={<UserOutlined />} />
      </Badge>
    </div>
  </div>
);
export default TopNav;
