import React, { useState } from "react";

import User from "./User";

import "./User.css";

function Users({ setScreen, users, setSelectedFoto, setSelectedName }) {
  return (
    <div className="userList">
      {users.map((user) => {
        return (
          <User
            key={user.id}
            name={user.name}
            userfoto={user.foto}
            onClick={() => {
              setSelectedFoto(user.foto);
              setSelectedName(user.name);
              setScreen(true);
            }}
          ></User>
        );
      })}
    </div>
  );
}

export default Users;
