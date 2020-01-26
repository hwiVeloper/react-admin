import React from "react";
import { Route } from "react-router";

const LayoutRoute = props => {
  const { layout: Layout, component: Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default LayoutRoute;
