import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

export const Footer = props => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.footer, { [classes.footerShift]: props.open })}
    >
      <Typography variant="body1">
        &copy;{" "}
        <Link
          component="a"
          href="https://github.com/hwiveloper/react-admin"
          target="_blank"
        >
          hwiveloper React Admin
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        리액트 어드민 템플릿입니다. 마음껏 사용하세요.
      </Typography>
    </div>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  footer: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    padding: theme.spacing(3)
  },
  footerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
