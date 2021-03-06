import { useState } from 'react'
export default function useToken(){

    const getToken=()=>{
        const tokenString=sessionStorage.getItem('token')
        const userToken=JSON.parse(tokenString)
        return userToken?.token
    }
    const [token, setToken]=useState(getToken())
    const saveToken=UserToken=>{
        sessionStorage.setItem('token',JSON.stringify(UserToken));
        setToken(UserToken.token)
    }
    return {
        setToken:saveToken,
        token
    }
    
}