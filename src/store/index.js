import { observable, extendObservable } from "mobx";

import TodoStore from "./TodoStore";
import DashboardStore from "./DashboardStore";
import SettingsStore from "./SettingsStore";
import MypageStore from "./MypageStore";

class Store {
  constructor() {
    extendObservable(this, {
      todo: new TodoStore(this),
      dashboard: new DashboardStore(this),
      settings: new SettingsStore(this),
      mypage: new MypageStore(this)
    });
  }
}

export default observable(new Store());
