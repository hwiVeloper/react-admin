import { inject } from "mobx-react";
import React, { Component } from "react";
import { MyInfo } from "../components/Mypage/MyInfo";

@inject(({ store }) => ({
  mypage: store.mypage
}))
class MypageContainer extends Component {
  render() {
    const { mypage } = this.props;
    return (
      <div>
        <MyInfo
          avatar={mypage.avatar}
          name={mypage.name}
          role={mypage.role}
          birthday={mypage.birthday}
        />
      </div>
    );
  }
}

export default MypageContainer;
