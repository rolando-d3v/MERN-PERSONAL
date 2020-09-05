import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "./LayoutBasic.scss";

function LayoutBasic(props) {
  console.log(props);

  const { routes } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu Sidebar User</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutBasic;


//componente para Routes User
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
