import { observable, action } from "mobx";

class DashboardStore {
  @observable
  issueChartTarget = undefined;

  @observable
  employeesChartTarget = undefined;

  @action
  changeIssueChartTarget = (target = "") => {
    console.log(target);
    this.issueChartTarget = target;
  };

  @action
  changeEmployeesChartTarget = (target = "") => {
    console.log(target);
    this.employeesChartTarget = target;
  };
}

export default DashboardStore;
