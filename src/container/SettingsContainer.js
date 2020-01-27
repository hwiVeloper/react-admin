import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { SettingsTheme } from "../components/Settings/SettingsTheme";

@inject(({ store }) => ({
  settings: store.settings
}))
@observer
class SettingsContainer extends Component {
  render() {
    return (
      <div>
        <SettingsTheme
          theme={this.props.settings.theme}
          themeChange={this.props.settings.toggleTheme}
        />
      </div>
    );
  }
}

export default SettingsContainer;
