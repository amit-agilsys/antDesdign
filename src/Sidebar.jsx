import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

import {
  AreaChartOutlined,
  FormOutlined,
  MailOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: "Navigation One",
    children: [
      {
        key: "11",
        label: "Option 1",
      },
      {
        key: "12",
        label: "Option 2",
      },
      {
        key: "13",
        label: "Option 3",
      },
      {
        key: "14",
        label: "Option 4",
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
const Sidebar = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <>
      <nav className="text-white h-100 custom-nav border-end p-0 px-lg-2 d-none d-lg-block position-fixed top-0 sidebar">
        <div className="row">
          <img className="mt-3 p-4" src="logo.png" alt="website Logo" />
        </div>
        <ul className="list-unstyled mt-3 px-2">
          <li className="d-flex align-items-center my-2">
            <UserAddOutlined className="me-2" />
            <Link to="/">User Form</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <UserSwitchOutlined className="me-2" />
            <Link to="/userlist">User List</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <FormOutlined className="me-2" />
            <Link>Form</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <AreaChartOutlined className="me-2" />
            <Link>Activity Log</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <UnorderedListOutlined className="me-2" />
            <Link>Company List</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-box-arrow-in-down me-2"></i>
            <Link>Cards</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-archive me-2"></i>
            <Link>User Interface</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-archive me-2"></i>
            <Link>Extended UI</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-layout-text-sidebar me-2"></i>
            <Link>Icons</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-archive me-2"></i>
            <Link>Forms Elements</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-file-text me-2"></i>
            <Link>Form Layouts</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-layout-text-sidebar me-2"></i>
            <Link>Form Wizard</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-pencil-square me-2"></i>
            <Link>Form Validation</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-table me-2"></i>
            <Link>Tables</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center my-2">
            <i className="bi bi-grid-3x3 me-2"></i>
            <Link>Datatables</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
          <li className="d-flex align-items-center mt-2">
            <i className="bi bi-graph-up me-2"></i>
            <Link>Charts</Link>
            <i className="fa-angle-right fa ms-auto fa-xs fa me-2"></i>
          </li>
        </ul>
        <Menu
          mode="inline"
          defaultSelectedKeys={["231"]}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          items={items}
          className="menuLi p-0"
          style={{ backgroundColor: "#222222" }}
        />
      </nav>
    </>
  );
};
export default Sidebar;
