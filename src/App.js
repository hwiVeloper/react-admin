import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";

@inject(({ store }) => ({
  settings: store.settings
}))
@observer
class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        type: this.props.settings.theme
      }
    });
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
