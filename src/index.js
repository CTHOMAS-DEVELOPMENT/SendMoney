import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './store';
import App from "./app";

ReactDOM.render(
    <BrowserRouter>
      <Provider store={ store }>
        <Switch>
        <Route path="/" component={App} exact={true} />
        </Switch>
      </Provider>
    </BrowserRouter>
    ,
    document.getElementById('app'),
  );
 
  
  
