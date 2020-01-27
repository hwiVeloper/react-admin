import React from "react";
import { Card, CardContent, withStyles } from "@material-ui/core";
import {} from "@material-ui/icons";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import {
  Animation,
  Stack,
  EventTracker,
  HoverState
} from "@devexpress/dx-react-chart";

export const DashboardIssueChart = props => {
  const chartData = [
    { ym: "2019/02", todo: 5, done: 3, notdone: 2 },
    { ym: "2019/03", todo: 1, done: 1, notdone: 0 },
    { ym: "2019/04", todo: 10, done: 9, notdone: 1 },
    { ym: "2019/05", todo: 7, done: 5, notdone: 2 },
    { ym: "2019/06", todo: 17, done: 16, notdone: 1 },
    { ym: "2019/07", todo: 27, done: 22, notdone: 5 },
    { ym: "2019/08", todo: 9, done: 7, notdone: 2 },
    { ym: "2019/09", todo: 33, done: 26, notdone: 7 },
    { ym: "2019/10", todo: 51, done: 38, notdone: 13 },
    { ym: "2019/11", todo: 17, done: 10, notdone: 7 },
    { ym: "2019/12", todo: 4, done: 2, notdone: 2 },
    { ym: "2020/01", todo: 26, done: 20, notdone: 6 }
  ];

  const legendStyles = () => ({
    root: {
      display: "flex",
      margin: "auto",
      flexDirection: "row"
    }
  });
  const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
  );
  const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
  const legendLabelStyles = () => ({
    label: {
      whiteSpace: "nowrap"
    }
  });
  const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
  );
  const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
    legendLabelBase
  );

  return (
    <Card>
      <CardContent>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries name="발생" valueField="todo" argumentField="ym" />
          <BarSeries name="해결" valueField="done" argumentField="ym" />
          <BarSeries name="미해결" valueField="notdone" argumentField="ym" />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Title text="📌 이슈 관리 현황" />
          <Stack />
          <Animation />
          <EventTracker />
          <HoverState hover={props.target} onHoverChange={props.targetChange} />
          <Tooltip />
        </Chart>
      </CardContent>
    </Card>
  );
};
