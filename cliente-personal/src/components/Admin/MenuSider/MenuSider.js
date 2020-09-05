import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
// import { AiFillHome } from "react-icons/ai";
import {
  AppstoreOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        className="admin-sider__menu"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/admin" > Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
        <Link to="/admin/login" > User</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
     <SubMenu key="sub1" icon={<ContainerOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default MenuSider;
