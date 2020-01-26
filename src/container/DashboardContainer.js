import { Grid } from "@material-ui/core";
import { Assignment, Check, Money, People } from "@material-ui/icons";
import React, { Component } from "react";
import { DashboardCard } from "../components/DashboardCard";
import { DashboardIssueChart } from "../components/DashboardIssueChart";
import { DashboardUsersChart } from "../components/DashboardUsersChart";

export default class DashboardContainer extends Component {
  render() {
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
          <Grid item xs={9}>
            <DashboardIssueChart />
          </Grid>
          <Grid item xs={3}>
            <DashboardUsersChart />
          </Grid>
        </Grid>
      </>
    );
  }
}
