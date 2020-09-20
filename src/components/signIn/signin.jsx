import React from "react";
import Button from "../button/Button";
import Inputbox from "../inputbox/inputbox";
import './signin.scss';

const Signin = () => {
  return <div className="signin-container">
    <h4>Sign In</h4>
    <Inputbox placeholder="Enter Username" className="m-10"></Inputbox>
    <Inputbox placeholder="Enter Password" className="m-10"></Inputbox>
    <Button className="m-10 mt-30" title="Sign In"></Button>
  </div>;
};

export default Signin;
