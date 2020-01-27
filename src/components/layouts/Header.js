import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Header = props => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: props.open })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={props.handleOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.logo}
            component={Link}
            to="/"
            color="inherit"
            variant="h6"
            noWrap
          >
            리액트 어드민
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  logo: {
    textDecoration: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
