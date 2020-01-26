import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

export const Content = props => {
  const classes = useStyles();

  const { open, child } = props;

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div className={classes.contentHeader} />
      {child}
    </div>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflow: "scroll"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  }
}));
