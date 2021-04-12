import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './EmpDetails.css'
import { useParams } from "react-router";


export default function EmpDetails() {  
 const [data, setData]=useState([])

var id  = useParams();
useEffect(()=>{
    console.log(id)
    axios.get('https://employeeBackend.nandhagopalmadd.repl.co/Getdata/'+id.id).then(res=>setData(res.data))
    

},[])
//console.log(data.EmpName)
  return(
    
    <div>              
        <div className='container align-items-center'>
        <h2 className='float-center'>Employee details</h2> 
       <br/> 
          <table className='table'>
          <tr>
            <td>Employee ID</td>
            <td>{data.EmpId}</td>
          </tr>
          <tr>
            <td>Employee Name</td>
            <td>{data.EmpName}</td>
          </tr>
          <tr>
            <td>Employee Designation</td>
            <td>{data.EmpDesignation}</td>
          </tr>
          <tr>
            <td>Employee MailID</td>
            <td>{data.EmpMail}</td>
          </tr>
          <tr>
            <td>Employee Contact Number</td>
            <td>{data.EmpContactNumber}</td>
          </tr>
          <tr>
            <td>Employee Address</td>
            <td>{data.EmpAddress}</td>
          </tr>
          <tr>
            <td>Employee Cab</td>
            <td>{data.EmployeeCab}</td>
          </tr>
          <tr>
            <td>Employee DQ</td>
            <td>{data.EmployeeDQ}</td>
          </tr>
           <tr>
            <td>Employee Certifications</td>
            <td>{data.EmployeeCerts}</td>
          </tr>
          <tr>
            <td>Employee Qualification</td>
            <td>{data.EmpQualification}</td>
          </tr>
          </table>
          <div className='btn btn-primary float-right' onClick={()=>window.history.back()}>Go back</div>
        </div>

        
     
    </div>
    
  );
 
}

