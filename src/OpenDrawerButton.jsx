import { Button, Space } from "antd";
import { useDrawer } from "./context/DrawerProvider";

const OpenDrawerButton = () => {
  const { showLargeDrawer } = useDrawer();

  return (
    <Space>
      <Button type="primary" onClick={showLargeDrawer}>
        Open Large Size (736px)
      </Button>
    </Space>
  );
};

export default OpenDrawerButton;
