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
        <MyInfo info={mypage} />
      </div>
    );
  }
}

export default MypageContainer;
