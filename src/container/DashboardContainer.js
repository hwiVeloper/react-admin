import { Grid } from "@material-ui/core";
import { Assignment, Check, Money, People } from "@material-ui/icons";
import React, { Component } from "react";
import { DashboardCard } from "../components/DashboardCard";
import { DashboardIssueChart } from "../components/DashboardIssueChart";
import { DashboardEmployeesChart } from "../components/DashboardEmployeesChart";
import { inject } from "mobx-react";

@inject(({ store }) => ({
  dashboard: store.dashboard
}))
class DashboardContainer extends Component {
  _handleChangeIssueTarget = target => {
    this.props.dashboard.changeIssueChartTarget(target);
  };

  _handleChangeEmployeesTarget = target => {
    this.props.dashboard.changeEmployeesChartTarget(target);
  };

  render() {
    const { issueChartTarget, employeesChartTarget } = this.props.dashboard;
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <DashboardCard
              title="자산"
              value="￦ 24,000,000"
              color="primary"
              icon={<Money />}
            />
          </Grid>
          <Grid item xs={3}>
            <DashboardCard
              title="사용자"
              value={"1,056"}
              color="secondary"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={3}>
            <DashboardCard
              title="이슈"
              value="76"
              color="success"
              icon={<Assignment />}
            />
          </Grid>
          <Grid item xs={3}>
            <DashboardCard
              title="프로젝트 진척도"
              value="78.9 %"
              color="error"
              icon={<Check />}
            />
          </Grid>
          <Grid item xs={7}>
            <DashboardIssueChart
              target={issueChartTarget}
              targetChange={this._handleChangeIssueTarget}
            />
          </Grid>
          <Grid item xs={5}>
            <DashboardEmployeesChart
              target={employeesChartTarget}
              targetChange={this._handleChangeEmployeesTarget}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default DashboardContainer;
