import React from "react";
import "./login.scss";
import logo from "../../assets/logo.png";
import Button from "../../components/button/Button";
import Signin from "../../components/signIn/signin";

const Login = () => {
  return (
    <div className="background">
      <header>
        <img src={logo} alt="logo" />
        <div>
          <Button title="Sign In"></Button>
        </div>
      </header>
      <main>
        <Signin></Signin>
        {/* <h1>Watch TV Shows , Movies !!</h1>
        <h3> Subscribe now , Cancel anytime</h3> */}
      </main>
    </div>
  );
};

export default Login;
