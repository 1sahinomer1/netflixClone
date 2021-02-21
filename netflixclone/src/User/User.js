import React from "react";

function User({ name, userfoto, onClick }) {
  return (
    <div className="user" onClick={onClick}>
      <img className="userFoto" src={userfoto}></img>
      <p className="userP">{name}</p>
    </div>
  );
}

export default User;
