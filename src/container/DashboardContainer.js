import { Grid } from "@material-ui/core";
import { Assignment, Check, Money, People } from "@material-ui/icons";
import { inject } from "mobx-react";
import React, { Component } from "react";
import { DashboardCard } from "../components/Dashboard/DashboardCard";
import { DashboardEmployeesChart } from "../components/Dashboard/DashboardEmployeesChart";
import { DashboardEmployeeSheet } from "../components/Dashboard/DashboardEmployeeSheet";
import { DashboardIssueChart } from "../components/Dashboard/DashboardIssueChart";
import { DashboardIssueSheet } from "../components/Dashboard/DashboardIssueSheet";

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
          <Grid item xs={12} lg={3}>
            <DashboardCard
              title="자산"
              value="￦ 24,000,000"
              color="primary"
              icon={<Money />}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <DashboardCard
              title="사용자"
              value={"1,056"}
              color="secondary"
              icon={<People />}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <DashboardCard
              title="이슈"
              value="76"
              color="success"
              icon={<Assignment />}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <DashboardCard
              title="프로젝트 진척도"
              value="78.9 %"
              color="error"
              icon={<Check />}
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <DashboardIssueChart
              target={issueChartTarget}
              targetChange={this._handleChangeIssueTarget}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <DashboardEmployeesChart
              target={employeesChartTarget}
              targetChange={this._handleChangeEmployeesTarget}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DashboardIssueSheet />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DashboardEmployeeSheet />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default DashboardContainer;
