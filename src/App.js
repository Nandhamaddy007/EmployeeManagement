import React  from 'react';
import {BrowserRouter ,Redirect,Route ,Switch } from 'react-router-dom'

import Dashboard from './Dashboard/dashboard'
import AddEmployee from './AddEmployee/AddEmployee'
import Login from './Login/Login'
import useToken from './useToken' 
import './App.css';


function App() {
  //var logoutTimer=setTimeout(()=> { sessionStorage.clear(); }, 20000);  
  const {token, setToken}=useToken()
  // const token=getToken();
  if(!token){
    return(
      <div>
        <BrowserRouter>
      <Switch>
        <Route path='*'>
          <Redirect to='/Login'/>
        </Route>      
      </Switch>
      </BrowserRouter>
      
      <Login setToken={ setToken }/>
      
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
      <Switch>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/AddEmployee'>
          <AddEmployee/>
        </Route>
        <Route path='/Login'>
        <Login setToken={ setToken }/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
