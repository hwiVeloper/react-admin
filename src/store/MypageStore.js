// const user = {
//   avatar: "https://github.com/hwiveloper.png",
//   name: "hwiveloper",
//   role: "Backend Developer"
// };
import { observable, action } from "mobx";

class MypageStore {
  @observable
  avatar = "https://github.com/hwiveloper.png";

  @observable
  name = "hwiveloper";

  @observable
  role = "Backend Developer";

  @observable
  birthday = "1990.08.17";

  @action
  changeName = (target = "") => {
    this.name = target;
  };

  @action
  changeRole = (target = "") => {
    this.role = target;
  };

  @action
  changeBirthday = (target = "") => {
    this.birthday = target;
  };
}

export default MypageStore;
