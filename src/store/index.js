import { observable, extendObservable } from "mobx";

import TodoStore from "./TodoStore";
import DashboardStore from "./DashboardStore";

class Store {
  constructor() {
    extendObservable(this, {
      todo: new TodoStore(this),
      dashboard: new DashboardStore(this)
    });
  }
}

export default observable(new Store());
