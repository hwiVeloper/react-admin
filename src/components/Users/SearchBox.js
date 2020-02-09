import {
  FormControl,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  Button
} from "@material-ui/core";
import { Search, Save } from "@material-ui/icons";
import React from "react";

export const SearchBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchBox}>
      <FormControl variant="outlined">
        <OutlinedInput
          id="search-box"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="사용자 검색하기"
          labelWidth={0}
        />
      </FormControl>
      <div>
        <Button
          size="large"
          startIcon={<Save />}
          className={classes.excelButton}
        >
          엑셀
        </Button>
        <Button color="primary" size="large" variant="contained">
          사용자 추가
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  searchBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  },
  excelButton: {
    backgroundColor: "#1d8f2a",
    color: "#ffffff",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}));
