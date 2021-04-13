import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import history from '../history'

export default function Admindashboard() {  
 const [data, setData]=useState([])
 useEffect(()=>{
  const getEmpData= async ()=>{
    
    var res=await axios.get('https://employeeBackend.nandhagopalmadd.repl.co/Getdata')
    setData(res.data)    
    // console.log(res.data)
    // console.log(data)
  };
getEmpData()
  
 },[data])
  return(
    
    <div>
      <h2>AdminDashboard</h2>     
      <div className="btn btn-success" onClick={goToAddEmp}>Add Employee</div>
    
          <div className='container'>
          
          <Table striped bordered hover size='md'>
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
                {
                  data.map((item,index)=>{
                    return(
                      
                        <tr key={item.EmpId}>
                        <td>{item.EmpId}</td>
                        <td>{item.EmpName}</td>
                        <td> {item.EmpDesignation} </td>
                        <td> {item.EmployeeDQ} </td>
                  <td> <Link className='btn btn-success' to={'/EmpDetails/'+item.EmpId}>View</Link></td>
                        </tr>
                     
                    )
                  })
                }
               </tbody>
              </Table>
          
          </div>        
     
    </div>
    
  );
 
}
function goToAddEmp(){
  history.push('/AddEmployee')
  window.location.reload()
}