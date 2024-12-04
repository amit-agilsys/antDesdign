import Sidebar from "./Sidebar";
import { Layout } from "antd";
import TopNav from "./TopNav";
import BreadcrumbComp from "./BreadcrumbComp";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Home = () => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Sidebar />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "#f5f5f5",
            height: "100px",
          }}
        >
          <TopNav />
          <BreadcrumbComp />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
