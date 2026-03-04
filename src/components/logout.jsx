import React from "react";


export default function Logout({setToken}){
    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <div className="logout">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    )
}