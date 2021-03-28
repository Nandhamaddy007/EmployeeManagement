import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../Dashboard/dashboard';
import { useHistory } from 'react-router-dom'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

 
export default function Login({setToken}) {      
  const [username, setUserName]=useState();
  const [password, setPassword]=useState();
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();        
    const token = await loginUser({
      user:username,
      pass:password
    });
    console.log(token)       
    if(token.token!='bad request'){
      setToken(token);
      history.push('/dashboard')
    }
    
    }

  return(
    <div className='login-wrapper'>
      <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e=>setUserName(e.target.value)}/>
      </label>
<br/>
      <label>
        <p>Password</p>
        <input type="password"onChange={e=>setPassword(e.target.value)} />
      </label>
      <div>
    <button> Submit </button>
      </div>
    </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
