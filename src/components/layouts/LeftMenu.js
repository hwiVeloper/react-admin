import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import {
  AccountCircle,
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
  { title: "대시보드", path: "/dashboard", icon: <Dashboard /> },
  { title: "사용자", path: "/users", icon: <People /> },
  { title: "컨텐츠", path: "/contents", icon: <Description /> },
  { title: "마이페이지", path: "/mypage", icon: <AccountCircle /> },
  { title: "설정", path: "/settings", icon: <Settings /> }
];

export const LeftMenu = props => {
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  const shouldOpenSidebar = isDesktop ? true : props.open;

  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={props.handleClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      >
        <div>
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
        </div>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)"
    },
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
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
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  }
}));
