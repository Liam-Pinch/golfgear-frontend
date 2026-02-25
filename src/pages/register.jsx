import React from 'react'
import AuthForm from '../components/authForm'
import { register } from '../api/api'

export default function Register(){
    const handleRegister = async ({name, email, password}) => {
        const res = await register(name,email,password);
        alert(res.message);
    }

    return <AuthForm type="register" onSubmit={handleRegister} />
}    