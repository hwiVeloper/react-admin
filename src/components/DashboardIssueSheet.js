import {
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import { Clear, Done, Refresh } from "@material-ui/icons";
import React from "react";

export const DashboardIssueSheet = () => {
  const classes = useStyles();

  const headCells = [
    { id: "title", numeric: false, disablePadding: true, label: "이슈명" },
    // { id: "description", numeric: false, disablePadding: false, label: "내용" },
    { id: "risk", numeric: false, disablePadding: false, label: "심각도" },
    { id: "request", numeric: false, disablePadding: false, label: "요청자" },
    // { id: "regdate", numeric: false, disablePadding: false, label: "등록일자" },
    {
      id: "isComplete",
      numeric: false,
      disablePadding: false,
      label: "해결여부"
    }
  ];

  const bodyCells = [
    {
      title: "대시보드 버그사항",
      risk: "보통",
      request: "홍길동",
      regdate: "20200102",
      isComplete: "Y"
    },
    {
      title: "결제 시 오류",
      risk: "높음",
      request: "배수지",
      regdate: "20190131",
      isComplete: "N"
    },
    {
      title: "ui 개선",
      risk: "낮음",
      request: "이팀쿡",
      regdate: "20200105",
      isComplete: "Y"
    },
    {
      title: "사용자 등록 컬럼 추가",
      risk: "낮음",
      request: "백길남",
      regdate: "20200122",
      isComplete: "Y"
    },
    {
      title: "admin 로그인 문제",
      risk: "보통",
      request: "김개발",
      regdate: "20200110",
      isComplete: "Y"
    }
  ];

  return (
    <Card>
      <CardContent>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            최근 이슈
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
                    sortDirection={headCell.id === "regdate" ? true : false}
                    style={{ fontWeight: "bold" }}
                  >
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bodyCells.map(bodyCell => (
                <TableRow key={bodyCell.title} className={classes.issueRow}>
                  <TableCell>
                    <Typography>{bodyCell.title}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {bodyCell.risk === "높음" ? (
                      <Typography color="error">{bodyCell.risk}</Typography>
                    ) : bodyCell.risk === "낮음" ? (
                      <Typography color="primary">{bodyCell.risk}</Typography>
                    ) : (
                      <Typography color="initial">{bodyCell.risk}</Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{bodyCell.request}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {bodyCell.isComplete === "Y" ? (
                      <Done color="primary" />
                    ) : (
                      <Clear color="error" />
                    )}
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
  }
}));
