import React from 'react';
import { useEffect, useState }  from 'react';
import axios from 'axios';
import useToken from '../useToken'

function getLastId(){
var res= axios.get('https://employeeBackend.nandhagopalmadd.repl.co/GetLastId')
return res.last
}


export default function AddEmployee() {
  var token= sessionStorage.getItem('token')
  const [state,setState]=useState({
    EmpId:"",
    EmpName:"",
    EmpDesignation:"",
    EmpMail:"",
    EmpContactNumber:"",
    EmpAddress:"",
    EmployeeCab:"",
    EmpQualification:"", 
    EmployeeDQ:"",
    EmployeeCerts:"",
    user:"",
    pass:""
  })
  
  if(token==='"Admin"')
  {
    return(
      <div className='container'>
      <h2>Add Employees</h2>
      <form>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Username</p>
        <input className={state.EmpName?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" onChange={e=>{
        var temp={EmpName:e.target.value}  
        setState(temp)
        }
        }
        />
      <br/>
      {state.EmpName?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee name cannot be empty</div>:null}
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Designation</p>
        <input className={state.EmpDesignation?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" onChange={e=>{
        var temp={EmpDesignation:e.target.value}  
        setState(temp)
        }
        }
        />
      <br/>
      {state.EmpDesignation?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Designation cannot be empty</div>:null}
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Contact No</p>
        <input className={state.EmpContactNumber?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" onChange={e=>{
        var temp={EmpContactNumber:e.target.value}  
        setState(temp)
        }
        }
        />
      <br/>
      {state.EmpContactNumber?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Contact cannot be empty</div>:null}
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Certifications</p>
        <input className={state.EmployeeCerts?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" onChange={e=>{
        var temp={EmployeeCerts:e.target.value}  
        setState(temp)
        }
        }
        />
      <br/>
      {state.EmployeeCerts?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Contact cannot be empty</div>:null}
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Address</p>
        <textarea className={state.EmpAddress?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"}  onChange={e=>{
        var temp={EmpAddress:e.target.value}  
        setState(temp)
        }
        }
        ></textarea>
      <br/>
      {state.EmpAddress?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Address cannot be empty</div>:null}
      </div>
      
      </form>
      <div className='btn btn-primary' onClick={()=>window.history.back()}>Go back</div>
      </div>
    );
  }else{
    return(
      <div>
        <h2>Unauthorized access</h2>
        <a href='/login'>Back to login</a>
      </div>
    )
  }


}
