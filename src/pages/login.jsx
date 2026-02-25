import React from 'react'
import AuthForm from '../components/authForm'
import { login } from '../api/api'

export default function Login({setToken}){

    const handleLogin = async ({email, password}) =>{
        const res = await login(email,password);
        if(res.token){
            localStorage.setItem('token', res.token);
            setToken(res.token);
        }else{
            alert('Login failed');
        }
    }

    return <AuthForm type="login" onSubmit={handleLogin} />

}