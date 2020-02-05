import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";

export const MyInfo = props => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={5} item>
          <Card>
            <CardContent>
              <div className={classes.profileBox}>
                <div>
                  <Typography variant="h3">hwiveloper</Typography>
                  <Typography variant="body1">Seoul, Korea</Typography>
                </div>
                <div className={classes.profileImgBox}>
                  <Avatar
                    alt="Profile Image"
                    className={classes.profileImg}
                    src={props.info.avatar}
                  />
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                프사 올리기
              </Button>
              <Button size="small" color="secondary">
                프사 지우기
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={7} item>
          <Card>
            <CardHeader
              title="관리자 정보"
              subheader="관리자 정보를 수정할 수 있습니다."
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="ID"
                    defaultValue={props.info.id}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="이름"
                    defaultValue={props.info.name}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    label="직무"
                    defaultValue={props.info.role}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    id="date"
                    label="생일"
                    type="date"
                    defaultValue={props.info.birthday}
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.profileDetailActions}>
              <Button size="small" color="primary">
                정보 수정
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  profileImg: {
    width: "100%",
    height: "100%"
  },
  profileBox: {
    display: "flex"
  },
  profileImgBox: {
    width: 100,
    height: 100,
    flexGrow: 0,
    flexShrink: 0,
    marginLeft: "auto"
  },
  profileDetailActions: {
    justifyContent: "flex-end",
    paddingRight: theme.spacing(2)
  }
}));
