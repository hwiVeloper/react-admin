import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  makeStyles,
  Switch
} from "@material-ui/core";
import React from "react";

export const SettingsTheme = props => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="테마설정"
        subheader="테마를 설정합니다. (light, dark모드)"
      />
      <CardContent className={classes.settingsTheme}>
        <Typography>다크모드 적용</Typography>
        <Switch
          checked={props.theme === "dark" ? true : false}
          onChange={props.themeChange}
          value="theme"
          inputProps={{ "aria-label": "change theme" }}
          color="primary"
        />
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  settingsTheme: {
    flex: "1 1 100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }
}));
