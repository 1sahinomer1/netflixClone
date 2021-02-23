import React, { useState } from "react";

import Users from "../User/Users";

import "./UserScreen.css";

function UserScreen({ setScreen, users, setSelectedFoto, setSelectedName }) {
  return (
    <div className="App">
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <span id="whoWatch">Kim izliyor?</span>
      <Users
        setScreen={setScreen}
        users={users}
        setSelectedFoto={setSelectedFoto}
        setSelectedName={setSelectedName}
      ></Users>
    </div>
  );
}

export default UserScreen;
