import React, { useEffect, useState } from 'react';
import {Table, Card} from 'react-bootstrap'

export default function Dashboard() {  
 const [data1, setData]=useState([])
 async function tss(){
  return await getEmpData()
}
 const getEmpData=()=>{
  return fetch('http://localhost:8080/Getdata', {
    method: 'GET',   
  }).then(res => res.json()).then(json=>setData(json.emp))
}
useEffect(()=>{
  tss()
},[])
  return(
    
    <div>
      <h2>Dashboard</h2>     
    
          <div>
          
          <Table striped bordered hover size='md'>
                <thead>
                  <tr>
                    <th>Si no</th>
                    <th>name</th>                    
                  </tr>
                </thead>  
              {                
                data1.map((item,ind)=>{
                  return(
                    
                    <tbody>
                      <tr key={item.empid}>
                        <td>{ind}</td>
                        <td>{item.empid}</td>
                        
                      </tr>
                      </tbody>
                  )
                })
                
              }
              </Table>
          
          </div>        
     
    </div>
    
  );
 
}