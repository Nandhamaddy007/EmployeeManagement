import React, { useEffect, useState } from "react";
//import history from "../history";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [data1, setData] = useState([]);
  async function tss() {
    return await getEmpData();
  }
  const getEmpData = () => {
    return fetch("https://employeeBackend.nandhagopalmadd.repl.co/Getdata", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };
  useEffect(() => {
    tss();
    //console.log(data1)
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="container">
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Designation</th>
              <th>Employee DQ</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item, index) => {
              return (
                <tr key={item.EmpId}>
                  <td>{item.EmpId}</td>
                  <td>{item.EmpName}</td>
                  <td> {item.EmpDesignation} </td>
                  <td> {item.EmployeeDQ} </td>
                  <td>
                    {" "}
                    <Link
                      className="btn btn-success"
                      to={"/EmpDetails/" + item.EmpId}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
