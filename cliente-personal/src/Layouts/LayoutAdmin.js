import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "./LayoutAdmin.scss";

import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from '../pages/Admin/SignIn'

function LayoutAdmin(props) {
  //   console.log(props);

  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  const user = null

  if(!user){
    return (
      <>
      <Route path="/admin/login" component={AdminSignIn} />
      <Redirect to="/admin/login" />
      </>
    )
  }

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer"> Footer... </Footer>
      </Layout>
    </Layout>
  );
}
export default LayoutAdmin;


//componente para Routes Admin
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
