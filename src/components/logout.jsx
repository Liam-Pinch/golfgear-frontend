import React from "react";


export default function Logout({setToken}){
    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}