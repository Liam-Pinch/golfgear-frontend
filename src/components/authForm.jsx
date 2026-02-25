import React, { useState } from "react";

export default function AuthForm({type = 'login', onSubmit}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, email, password});
    }

    return (
        <form onSubmit ={handleSubmit}>
            {type === 'register' && (
                <input
                 placeholder="Name"
                 value={name}
                 onChange={e => setName(e.target.value)}
                 required
                 />
            )}
            <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={e => setEmail(e.target.value)}
             required
             />
            <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={e => setPassword(e.target.value)}
             required
             />
            <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
         </form>
    )
}

