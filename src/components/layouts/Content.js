import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Footer } from "./Footer";

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
      <Footer />
    </div>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginLeft: 0
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: drawerWidth
    },
    overflow: "auto"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
}));
