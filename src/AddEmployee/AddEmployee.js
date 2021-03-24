import React from 'react';
import useToken from '../useToken'

export default function AddEmployee() {
  const {token}=useToken()
  console.log(token)
  if(token==='Admin')
  {
    return(
      <h2>Add Employees</h2>
      
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