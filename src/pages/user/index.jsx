import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function User() {
  const name = useSelector((state) => state.user.name);
  return name ? <div>123</div> : <Redirect to="/login" />;
}

export default User;
