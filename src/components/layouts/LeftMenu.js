import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import {
  AccountCircle,
  ChevronLeft,
  Dashboard,
  Description,
  People,
  Settings
} from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { Profile } from "./Profile";

const drawerWidth = 240;

// You can add menu which you need with title, path and icon
const menus = [
  { title: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
  { title: "Users", path: "/users", icon: <People /> },
  { title: "Contents", path: "/contents", icon: <Description /> },
  { title: "My Page", path: "/mypage", icon: <AccountCircle /> },
  { title: "Settings", path: "/settings", icon: <Settings /> }
];

export const LeftMenu = props => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <Profile />
        <Divider />
        <List>
          {menus.map((item, index) => (
            <NavLink
              to={item.path}
              className={classes.drawerLink}
              activeClassName={classes.drawerLinkActive}
              key={index}
            >
              <ListItem button>
                <div className={classes.listItemIcon}>{item.icon}</div>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerLink: {
    textDecoration: "none",
    color: "inherit"
  },
  drawerLinkActive: {
    color: theme.palette.primary.main
  },
  listItemIcon: {
    marginRight: theme.spacing(2)
  }
}));
