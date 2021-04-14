import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AddEmployee.css";
import useToken from "../useToken";

export default function AddEmployee() {
  var token = sessionStorage.getItem("token");
  var msg;
  function handleSubmit(states) {
    var temp = "EMP" + state.EmpId;
    var dq = state.EmployeeCerts.split(",").length;
    console.log(state);
    setState({ ...state, Pass: temp, EmployeeDQ: dq * 10 });
    axios
      .post("https://employeeBackend.nandhagopalmadd.repl.co/AddEmployee", {
        body: JSON.stringify(state)
      })
      .then((data) => {
        msg = data;
      });
  }
  const [state, setState] = useState({
    EmpId: "",
    EmpName: "",
    EmpDesignation: "",
    EmpMail: "",
    EmpContactNumber: "",
    EmpAddress: "",
    EmployeeCab: false,
    EmpQualification: "",
    EmployeeDQ: "",
    EmpDOB: "",
    EmployeeCerts: "",
    User: "",
    Pass: ""
  });
  var ins = state;
  useEffect(() => {
    getLastId();
  }, []);
  function getLastId() {
    axios
      .get("https://employeeBackend.nandhagopalmadd.repl.co/GetLastId")
      .then((res) => {
        //console.log(res.data)
        let t = res.data.last + 1;
        setState({ ...state, EmpId: t });
      });
  }
  function generateMail() {
    let id = state.EmpName.replace(" ", "");
    id = id.length > 10 ? id.slice(0, 10) : id;
    let m = id + "." + id[0] + "@EmpMgmt.com";
    setState({ ...state, User: m.split("@")[0], EmpMail: m });
    // console.log(state)
  }

  if (token === '"Admin"') {
    return (
      <div className="container">
        <h2>Add Employees</h2>
        <form>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Employee ID</p>
            <input
              className="form-control col-md-5"
              type="text"
              disabled
              value={state.EmpId}
            />
            <br />
          </div>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Name</p>
            <input
              className={
                state.EmpName?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              type="text"
              onChange={(e) => {
                setState({ ...state, EmpName: e.target.value });
              }}
            />
            <br />
            {state.EmpName?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee name cannot be empty
              </div>
            ) : null}
          </div>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Employee Mail</p>
            <input
              className="form-control col-md-5"
              type="text"
              disabled
              value={state.EmpMail}
            />
            <br />
            {state.EmpName?.length > 3 ? (
              <div
                onClick={generateMail}
                className="offset-sm-1 btn btn-primary"
              >
                Generate MailID
              </div>
            ) : null}
          </div>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">DOB</p>
            <input
              className={
                state.EmpDOB?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              type="date"
              onChange={(e) => {
                setState({
                  ...state,
                  EmpDOB: new Date(e.target.value).toLocaleDateString()
                });
              }}
            />
            <br />
            {state.EmpDOB?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee DOB cannot be empty
              </div>
            ) : null}
          </div>

          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Designation</p>
            <input
              className={
                state.EmpDesignation?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              type="text"
              onChange={(e) => {
                setState({ ...state, EmpDesignation: e.target.value });
              }}
            />
            <br />
            {state.EmpDesignation?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee Designation cannot be empty
              </div>
            ) : null}
          </div>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Contact No</p>
            <input
              className={
                state.EmpContactNumber?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              type="text"
              onChange={(e) => {
                setState({ ...state, EmpContactNumber: e.target.value });
              }}
            />
            <br />
            {state.EmpContactNumber?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee Contact cannot be empty
              </div>
            ) : null}
          </div>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Certifications</p>
            <input
              className={
                state.EmployeeCerts?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              type="text"
              placeholder="ex:Angular,Nodejs,MongoDB"
              onChange={(e) => {
                setState({ ...state, EmployeeCerts: e.target.value });
              }}
            />
            <br />
            <small>Enter your certifications , seperated</small>
            {state.EmployeeCerts?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee Contact cannot be empty
              </div>
            ) : null}
          </div>
          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Qualification</p>
            <input
              className={
                state.EmpQualification?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              type="text"
              onChange={(e) => {
                setState({ ...state, EmpQualification: e.target.value });
              }}
            />
            <br />
            {state.EmpQualification?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee Qualification cannot be empty
              </div>
            ) : null}
          </div>

          <div className="form-group row">
            <p className="col-md-2 offset-md-2">Address</p>
            <textarea
              className={
                state.EmpAddress?.length <= 0
                  ? "form-control is-invalid col-md-5"
                  : "form-control col-md-5"
              }
              onChange={(e) => {
                setState({ ...state, EmpAddress: e.target.value });
              }}
            ></textarea>
            <br />
            {state.EmpAddress?.length <= 0 ? (
              <div className="offset-md-4 col-md-4 text-danger">
                Employee Address cannot be empty
              </div>
            ) : null}
          </div>
        </form>
        <p className="text-success">{msg}</p>
        <div
          class="btn btn-primary offset-sm-2"
          onClick={() => handleSubmit(state)}
        >
          Submit
        </div>
        <div
          className="btn btn-danger offset-md-6"
          onClick={() => window.history.back()}
        >
          Go back
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Unauthorized access</h2>
        <a href="/login">Back to login</a>
      </div>
    );
  }
}
