import React, { useState } from "react";
import UserList from "../User/UserList";
import "./firstScreen.css";

function FirstScreen({
  changeScreen,
  userList,
  setSelectedFoto,
  setSelectedName,
}) {
  return (
    <div className="App">
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <span id="whoWatch">Kim izliyor?</span>
      <UserList
        changeScreen={changeScreen}
        userList={userList}
        setSelectedFoto={setSelectedFoto}
        setSelectedName={setSelectedName}
      ></UserList>
    </div>
  );
}

export default FirstScreen;
