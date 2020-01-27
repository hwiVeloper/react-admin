import {
  Animation,
  EventTracker,
  HoverState
} from "@devexpress/dx-react-chart";
import {
  Chart,
  Legend,
  PieSeries,
  Title,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import { Card, CardContent, withStyles } from "@material-ui/core";
// import {} from "@material-ui/icons";
import React from "react";

export const DashboardEmployeesChart = props => {
  const chartData = [
    { type: "Backend", val: 134 },
    { type: "Frontend", val: 51 },
    { type: "DBA", val: 5 },
    { type: "Infra", val: 20 },
    { type: "Security", val: 14 }
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
          <PieSeries valueField="val" argumentField="type" innerRadius={0.6} />
          <Title text="⌨️ 개발 인력 구성" />
          <Legend
            position="bottom"
            rootComponent={Root}
            labelComponent={Label}
          />
          <Animation />
          <EventTracker />
          <HoverState hover={props.target} onHoverChange={props.targetChange} />
          <Tooltip />
        </Chart>
      </CardContent>
    </Card>
  );
};
