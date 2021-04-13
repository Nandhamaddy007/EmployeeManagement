import React from 'react';
import { useEffect, useState }  from 'react';
import axios from 'axios';
import useToken from '../useToken'


function handleSubmit(state){
console.log(state)
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
  useEffect(()=>{
    getLastId()
  },[])
  function getLastId(){
axios.get('https://employeeBackend.nandhagopalmadd.repl.co/GetLastId').then((res)=>{
    //console.log(res.data)
    let t=res.data.last+1
    var temp=state  
        temp.EmpId=t
        setState(temp)
})

}
  function generateMail(){
    let id=state.EmpName.replace(' ','')
    id=id.length>10?id.slice(0,10):id
    let m=id+'.'+id[0]+'@EmpMgmt.com'
    var temp=state  
        temp.EmpMail=m       
        setState(temp)
  
}
  
  
  if(token==='"Admin"')
  {
    return(
      <div className='container'>
      <h2>Add Employees</h2>
      <form>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Employee ID</p>
        <input className="form-control col-md-5" type="text" disabled value={state.EmpId}/>
      <br/>      
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Name</p>
        <input className={state.EmpName?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" onChange={e=>{
        var temp=state  
        temp.EmpName=e.target.value        
        setState(temp)
        
        }
        }
        />
      <br/>
      {state.EmpName?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee name cannot be empty</div>:null}
      </div>
     <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Employee Mail</p>
        <input className="form-control col-md-5" type="text" disabled value={state.EmpMail}/>
      <br/>
      {state.EmpName?.length>3?<div onClick={generateMail} className='offset-sm-1 btn btn-primary'>Generate MailID</div>:null}
      </div>

      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Designation</p>
        <input className={state.EmpDesignation?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" onChange={e=>{        
        var temp=state  
        temp.EmpDesignation=e.target.value        
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
        var temp=state  
        temp.EmpContactNumber=e.target.value        
        setState(temp)
        }
        }
        />
      <br/>
      {state.EmpContactNumber?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Contact cannot be empty</div>:null}
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Certifications</p>
        <input className={state.EmployeeCerts?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"} type="text" placeholder='ex:Angular,Nodejs,MongoDB' onChange={e=>{  
        var temp=state  
        temp.EmployeeCerts=e.target.value        
        setState(temp)        
        }
        }
        />
      <br/>
      <small>Enter your certifications , seperated</small>
      {state.EmployeeCerts?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Contact cannot be empty</div>:null}
      </div>
      <div className='form-group row'>
        <p className='col-md-2 offset-md-2'>Address</p>
        <textarea className={state.EmpAddress?.length<=0?"form-control is-invalid col-md-5":"form-control col-md-5"}  onChange={e=>{         
        var temp=state  
        temp.EmpAddress=e.target.value        
        setState(temp)
        }
        }
        ></textarea>
      <br/>
      {state.EmpAddress?.length<=0?<div className='offset-md-4 col-md-4 text-danger'>Employee Address cannot be empty</div>:null}
      </div>
      
      </form>
      <div class='btn btn-primary offset-sm-2' onClick={()=>handleSubmit(state)}>Submit</div>
      <div className='btn btn-danger offset-md-6' onClick={()=>window.history.back()}>Go back</div>
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
