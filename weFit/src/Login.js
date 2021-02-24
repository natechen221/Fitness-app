import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "./styles/login.css"
import loginPhoto from "./assets/login-photo.jpg";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="mainContainer">
      <div className="leftSide">
          <img src={loginPhoto} alt="" className="loginPhoto"/>
        </div>
      <div className="rightSide">
        <div className="formContainer">
        <h1 className="formHeader"> Login </h1>
          <form onSubmit={handleLogin}>
            <div className="inputContainer">
              <input className="formInput" name="email" type="email" placeholder="Email" />
              <input className="formInput" name="password" type="password" placeholder="Password" />
            </div>
            <div className="buttonWrapper">
              <button className="formButton" type="submit">Login</button>
            </div>
            <div className="signUpWrapper">
              <Link to="/signup" className="signUpText"> 
                New user? Sign up Here! 
              </Link>
            </div>
          </form>
        </div>
        </div>
      </div>
        
  );
};

export default withRouter(Login);