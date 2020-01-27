import { observable, action } from "mobx";

class DashboardStore {
  @observable
  issueChartTarget = null;

  @observable
  employeesChartTarget = null;

  @action
  changeIssueChartTarget = (target = "") => {
    this.issueChartTarget = target;
  };

  @action
  changeEmployeesChartTarget = (target = "") => {
    this.employeesChartTarget = target;
  };
}

export default DashboardStore;
