import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  store,
  routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider store={stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
