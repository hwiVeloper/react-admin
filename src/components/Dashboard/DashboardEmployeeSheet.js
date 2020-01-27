import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  TableContainer,
  Table,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar
} from "@material-ui/core";
import { Refresh, Face } from "@material-ui/icons";

export const DashboardEmployeeSheet = () => {
  const classes = useStyles();

  const headCells = [
    { id: "name", numeric: false, disablePadding: true, label: "이름" },
    { id: "team", numeric: false, disablePadding: false, label: "팀" },
    { id: "role", numeric: false, disablePadding: false, label: "역할" },
    { id: "date", numeric: false, disablePadding: false, label: "투입일" }
  ];

  const bodyCells = [
    { name: "정상호", team: "모바일팀", role: "Android", date: "2019.12.22" },
    { name: "이상혁", team: "서버개발팀", role: "DBA", date: "2019.10.11" },
    { name: "양태민", team: "UI/UX팀", role: "Frontend", date: "2019.08.16" },
    { name: "최태식", team: "AI팀", role: "Backend", date: "2019.05.29" },
    { name: "배정균", team: "빅데이터팀", role: "Backend", date: "2019.01.02" }
  ];

  return (
    <Card>
      <CardContent>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            최근 투입 인력
          </Typography>
          <Tooltip title="새로고침">
            <IconButton aria-label="새로고침">
              <Refresh />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "center"}
                    padding={headCell.disablePadding ? "none" : "default"}
                    style={{ fontWeight: "bold" }}
                  >
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bodyCells.map(bodyCell => (
                <TableRow key={bodyCell.name}>
                  <TableCell className={classes.avatarCell}>
                    <Avatar className={classes.avatar}>
                      <Face />
                    </Avatar>
                    <Typography className={classes.avatarText}>
                      {bodyCell.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{bodyCell.team}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{bodyCell.role}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{bodyCell.date}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "bold",
    flex: "1 1 100%"
  },
  avatar: {
    width: 35,
    height: 35
  },
  avatarCell: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center"
  },
  avatarText: {
    margin: "auto"
  }
}));
