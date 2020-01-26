import React from "react";
import { Redirect, Switch } from "react-router-dom";
import DashboardContainer from "./container/DashboardContainer";
import ContentsContainer from "./container/ContentsContainer";
import MypageContainer from "./container/MypageContainer";
import SettingsContainer from "./container/SettingsContainer";
import UsersContainer from "./container/UsersContainer";
import Layout from "./container/Main";
import LayoutRoute from "./components/LayoutRoute";

export default () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <LayoutRoute
      layout={Layout}
      path="/dashboard"
      component={DashboardContainer}
      exact
    />
    <LayoutRoute
      layout={Layout}
      path="/users"
      component={UsersContainer}
      exact
    />
    <LayoutRoute
      layout={Layout}
      path="/contents"
      component={ContentsContainer}
      exact
    />
    <LayoutRoute
      layout={Layout}
      path="/mypage"
      component={MypageContainer}
      exact
    />
    <LayoutRoute
      layout={Layout}
      path="/settings"
      component={SettingsContainer}
      exact
    />
  </Switch>
);
