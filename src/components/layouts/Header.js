import {
  AppBar,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";

export const Header = props => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={props.handleOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
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

// const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  logo: {
    textDecoration: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));
