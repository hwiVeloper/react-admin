import {
  Avatar,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

export const DashboardCard = props => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Avatar className={clsx(classes.avatar, classes[props.color])}>
                {props.icon}
              </Avatar>
            </Grid>
            <Grid item xs={9}>
              <Typography color="textSecondary" gutterBottom variant="body2">
                {props.title}
              </Typography>
              <Typography variant="h4">{props.value}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 60,
    height: 60
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main
  },
  error: {
    backgroundColor: theme.palette.error.main
  },
  info: {
    backgroundColor: theme.palette.info.main
  },
  success: {
    backgroundColor: theme.palette.success.main
  }
}));
