import React from 'react';
import {BrowserRouter, Route, Switch, BrowserRouter} from 'react-router-dom'
import routes from './config/routes'
import { Form, Input, Button} from 'antd';
import './App.scss';
import Admin from './pages/Admin';

const App = () => {

  return (
   <div className="app" >
     <BrowserRouter>
     <Switch>
       <Route exact={true} path="/admin" component={AdminHome}  />
     </Switch>
     </BrowserRouter>
   </div>
  );
};

export default App