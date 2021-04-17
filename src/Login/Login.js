import React, { useState } from "react";
import axios from "axios";
import useToken from "../useToken";
import history from "../history";
//import Dashboard from '../Dashboard/dashboard';
//import { useHistory } from 'react-router-dom'

async function loginUser(credentials) {
  //console.log('request called')
  return axios.post("https://employeeBackend.nandhagopalmadd.repl.co/login", {
    body: JSON.stringify(credentials)
  });
}

export default function Login() {
  const { token, setToken } = useToken();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      const token = await loginUser({
        User: username,
        Pass: password
      });
      if (token.data.code !== "bad") {
        //console.log(token);
        setToken(token.data.token);
        if (token.data.token === "Employee") {
          history.push("/EmployeeDashboard");
        } else {
          history.push("/AdminDashboard");
        }
        sessionStorage.setItem("username", username);
        window.location.reload();
      } else {
        setError(token.data.msg);
      }
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="row justify-content-center">
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit} className=" align-items-center">
          <div className="form-group">
            <label>
              <p>Username</p>
              <input
                className={
                  username?.length <= 0
                    ? "form-control is-invalid"
                    : "form-control"
                }
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <br />
            {username?.length <= 0 ? (
              <span className="text-danger">Username cannot be empty</span>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label>
              <p>Password</p>
              <input
                className={
                  password?.length <= 0
                    ? "form-control is-invalid"
                    : "form-control"
                }
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            {password?.length <= 0 ? (
              <span className="text-danger">password cannot be empty</span>
            ) : null}
          </div>

          <div>
            <button className="btn btn-primary"> Submit </button>
          </div>
          <span className="text-danger">{error}</span>
        </form>
      </div>
    </div>
  );
}
