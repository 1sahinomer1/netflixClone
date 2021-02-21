import React, { useState } from "react";
import User from "./User";
import "./User.css";

function UserList({
  changeScreen,
  userList,
  setSelectedFoto,
  setSelectedName,
}) {
  return (
    <div className="userList">
      {userList.map((user) => {
        return (
          <User
            key={user.id}
            name={user.name}
            userfoto={user.foto}
            onClick={() => {
              setSelectedFoto(user.foto);
              setSelectedName(user.name);
              changeScreen(true);
            }}
          ></User>
        );
      })}
    </div>
  );
}

export default UserList;
