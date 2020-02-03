import React from "react";
import {
  Grid,
  Avatar,
  makeStyles,
  Card,
  CardContent,
  TextField
} from "@material-ui/core";

export const MyInfo = props => {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container justify="center">
            <Grid item xs={12} lg={2}>
              <Avatar
                alt="Profile Image"
                className={classes.profileImg}
                src={props.avatar}
              />
            </Grid>
            <Grid item xs={12} lg={10}>
              <Grid item>
                <TextField label="ID" defaultValue={props.name} />
              </Grid>
              <Grid item>
                <TextField label="직무" defaultValue={props.role} />
              </Grid>
              <Grid item>
                <TextField
                  id="date"
                  label="생일"
                  type="date"
                  defaultValue={props.birthday}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  profileImg: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));
