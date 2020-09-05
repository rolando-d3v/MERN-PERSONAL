import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          {/* ITERANDO CONFIG DE ROUTES */}
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};


//componentes pra todas las Routes
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;





