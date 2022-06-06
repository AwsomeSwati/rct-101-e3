import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {


  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const {isAuth} = useContext(AuthContext)


  const handleOnsubmit = (e)=> {
    e.preventDefault();

    console.log(email,password)
  }

  if(isAuth === true ){
    <Navigate to="/Products" />
  }
  return (
    <div>
      <form onSubmit={handleOnsubmit}>
      <input data-cy="login-email" value={email} placeholder="Enter Email..." onChange={(e)=> setEmail(e.target.value)} />
      <br></br>
      <input data-cy="login-password" value={password} placeholder="Enter Password..."  onChange={(e)=> setPassword(e.target.value)}  />
      <br></br>
      <button data-cy="login-submit" type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Login;
