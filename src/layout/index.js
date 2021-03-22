import React, { useState, useEffect } from "react";
import "./styles.css";

import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalendarOutlined,
  FileOutlined,
  UnorderedListOutlined,
  ExportOutlined,
  ControlOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Dashboard = ({ children }) => {
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  let { pathname } = useLocation();

  useEffect(() => {
    setOpenKeys(pathname === "/perfiles/roles" ? ["sub1"] : []);
  }, [pathname]);

  const rootSubmenuKeys = ["sub1"];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[pathname]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.Item key="1" icon={<CalendarOutlined />}>
            Programacíon
          </Menu.Item>
          <Menu.Item key="2" icon={<UnorderedListOutlined />}>
            Gestion de operaciones
          </Menu.Item>
          <SubMenu
            onTitleClick={() => {
              setOpenKeys(false);
            }}
            key={"sub1"}
            icon={<ControlOutlined />}
            title="Perfiles"
          >
            <Menu.Item key="/perfiles/roles" icon={"R - "}>
              Roles
              <Link to="/perfiles/roles" />
            </Menu.Item>
            <Menu.Item key="5" icon={"U - "}>
              Usuario
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="6" icon={<FileOutlined />}>
            Reportes
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ display: "flex", alignContent: "center" }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            <h2>Prueba Front-end </h2>
            <ExportOutlined
              style={{
                alignSelf: "center",
                position: "absolute",
                right: "2em",
                fontSize: "1.5em",
                marginBottom: "0.5em",
              }}
              onClick={() => {
                window.sessionStorage.clear();
                window.location.reload();
              }}
            />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
