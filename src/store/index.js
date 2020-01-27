import { observable, extendObservable } from "mobx";

import TodoStore from "./TodoStore";
import DashboardStore from "./DashboardStore";
import SettingsStore from "./SettingsStore";

class Store {
  constructor() {
    extendObservable(this, {
      todo: new TodoStore(this),
      dashboard: new DashboardStore(this),
      settings: new SettingsStore(this)
    });
  }
}

export default observable(new Store());
