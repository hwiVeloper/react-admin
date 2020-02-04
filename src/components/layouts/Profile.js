import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";

export const Profile = () => {
  const classes = useStyles();

  const user = {
    avatar: "https://github.com/hwiveloper.png",
    name: "hwiveloper",
    role: "Backend Developer"
  };
  return (
    <div className={classes.profile}>
      <Avatar
        alt="Profile Image"
        className={classes.profileImg}
        src={user.avatar}
      />
      <Typography className={classes.profileName} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.role}</Typography>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  profileImg: {
    width: 60,
    height: 60
  },
  profileName: {
    marginTop: theme.spacing(1)
  }
}));
