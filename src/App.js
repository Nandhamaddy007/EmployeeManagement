//import React, { useEffect }  from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";

import EmployeeDashboard from "./Dashboard/dashboard";
import Admindashboard from "./Dashboard/Admindashboard";
import EmpDetails from "./EmpDetails/EmpDetails";
import history from "./history";
import AddEmployee from "./AddEmployee/AddEmployee";
import Login from "./Login/Login";
//import useToken from "./useToken";
import "./App.css";

function App() {
  //var logoutTimer=setTimeout(()=> { sessionStorage.clear(); }, 20000);

  var tk = sessionStorage.getItem("token");
  var username = sessionStorage.getItem("username");

  return (
    <div className="wrapper">
      <nav className="navbar navbar-dark bg-primary text-light">
        <h1 className="text-light">Employee Management</h1>
        {username?.length > 0 ? <h2>Welcome {username}</h2> : null}
      </nav>

      <div>{tk === '"Admin"' || tk === '"Employee"' ? <LogOut /> : null}</div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/Login"
            render={() =>
              tk === '"Admin"' ? (
                <Redirect to="/Admindashboard" />
              ) : tk === '"Employee"' ? (
                <Redirect to="/EmployeeDashboard" />
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/EmpDetails/:id"
            render={() =>
              tk === '"Employee"' || tk === '"Admin"' ? (
                <EmpDetails />
              ) : (
                <Redirect to="/Login" />
              )
            }
          />
          <Route
            path="/Admindashboard"
            render={() =>
              tk === '"Admin"' ? <Admindashboard /> : <Redirect to="/Login" />
            }
          />
          <Route
            path="/AddEmployee"
            render={() =>
              tk === '"Admin"' ? <AddEmployee /> : <Redirect to="/Login" />
            }
          />
          <Route
            path="/EmployeeDashboard"
            render={() =>
              tk === '"Employee"' || tk === '"Admin"' ? (
                <EmployeeDashboard />
              ) : (
                <Redirect to="/Login" />
              )
            }
          />

          <Route path="/">
            <Redirect to="/Login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
var LogOut = function Logout() {
  return (
    <div className="btn btn-danger float-right" onClick={() => clearLog()}>
      Logout
    </div>
  );
};
function clearLog() {
  console.log("log out clicked...");
  var s = window.confirm("Are you sure?");
  if (s) {
    sessionStorage.clear();
    history.push("/Login");
    window.location.reload();
  }
}
export default App;
