import { Link, Typography } from "@material-ui/core";
import React from "react";

export const Footer = props => {
  // const classes = useStyles();

  return (
    <div
    // className={clsx(classes.footer, { [classes.footerShift]: props.open })}
    >
      <Typography variant="body1">
        &copy;{" "}
        <Link
          component="a"
          href="https://github.com/hwiveloper/react-admin"
          target="_blank"
        >
          hwiveloper React Admin
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        리액트 어드민 템플릿입니다. 마음껏 사용하세요.
      </Typography>
    </div>
  );
};
