import React from 'react';
import { useEffect }  from 'react';
import useToken from '../useToken'

export default function AddEmployee() {
  var token= sessionStorage.getItem('token')
  console.log(token==='"Admin"')
  
  if(token==='"Admin"')
  {
    return(
      <div className='container'>
      <h2>Add Employees</h2>
      <form>
      <div>
      <label className='label'>EmployeeName</label>
      <input type='text' className='form-control'/>
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
