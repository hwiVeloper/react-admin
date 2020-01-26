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

const menus = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Users", path: "/users" },
  { title: "Contents", path: "/contents" },
  { title: "My Page", path: "/mypage" },
  { title: "Settings", path: "/settings" }
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
                <div className={classes.listItemIcon}>
                  {index === 0 ? (
                    <Dashboard />
                  ) : index === 1 ? (
                    <People />
                  ) : index === 2 ? (
                    <Description />
                  ) : index === 3 ? (
                    <AccountCircle />
                  ) : index === 4 ? (
                    <Settings />
                  ) : null}
                </div>
                <ListItemText primary={item.title} />
                {/* {item.title} */}
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          {["Components"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
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
