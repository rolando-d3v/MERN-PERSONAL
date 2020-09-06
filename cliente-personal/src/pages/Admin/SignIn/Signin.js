import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import ep from "../../../assets/img/png/ep.png";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import "./SignIn.scss";

const Signin = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <div className="sign-in__content__logo">
          <img src={ep} alt="ep" />
          <span>EJERCITO</span>
        </div>

        <div className="sign-in__content__tabs">
          <Tabs className="rol" defaultActiveKey="2" centered>
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Entrar
                </span>
              }
              key="1"
            >
              Tab 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Nuevo Usuario
                </span>
              }
              key="2"
            >
              Tab 2
            </TabPane>
          </Tabs>
          ,
        </div>
      </Content>
    </Layout>
  );
};

export default Signin;
