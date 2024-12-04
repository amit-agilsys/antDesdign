import { Drawer } from "antd";
import { useDrawer } from "./context/DrawerProvider";

const Slider = () => {
  const { open, size, onClose } = useDrawer();

  return (
    <Drawer
      title={`${size} Drawer`}
      placement="right"
      size={size}
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Slider;
