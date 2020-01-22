import { observable, extendObservable } from "mobx";

import TodoStore from "./TodoStore";

class Store {
  constructor() {
    extendObservable(this, {
      todo: new TodoStore(this)
    });
  }
}

export default observable(new Store());
