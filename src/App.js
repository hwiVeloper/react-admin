import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import React from "react";
import { Router } from "react-router";
import "./App.css";
import Routes from "./Routes";
import store from "./store";

const App = () => {
  const browserHistory = createBrowserHistory();
  const routingStore = new RouterStore();

  const stores = {
    store,
    routing: routingStore
  };

  const history = syncHistoryWithStore(browserHistory, routingStore);

  return (
    <Provider {...stores}>
      <Router history={history}>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
