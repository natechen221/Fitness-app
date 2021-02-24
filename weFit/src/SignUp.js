import React, { useCallback } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import app from "./base";
import "./styles/signUp.css"
import loginPhoto from "./assets/sign-up-photo.jpg";
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="mainContainer">
    <div className="leftSide">
        <img src={loginPhoto} alt="" className="loginPhoto"/>
      </div>
    <div className="rightSide">
      <div className="formContainer">
      <h1 className="formHeader"> Sign Up! </h1>
        <form onSubmit={handleSignUp}>
          <div className="inputContainer">
            <input className="formInput" name="email" type="email" placeholder="Email" />
            <input className="formInput" name="password" type="password" placeholder="Password" />
          </div>
          <div className="buttonWrapper">
            <button className="formButton" type="submit">Sign Up</button>
          </div>
          <div className="signUpWrapper">
            <Link to="/login" className="signUpText"> 
              Already have an Account? Click here! 
            </Link>
          </div>
        </form>
      </div>
      </div>
    </div>
      
  );
};

export default withRouter(SignUp);