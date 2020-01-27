import { observable, action } from "mobx";

class SettingsStore {
  @observable
  theme = "light";

  @action
  toggleTheme = () => {
    this.theme = this.theme === "light" ? "dark" : "light";
  };
}

export default SettingsStore;
