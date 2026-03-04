import { useState } from "react";
import Basket from "./basket"
import Login from "../pages/login";
import Register from "../pages/register";
import Logout from "./logout";

export default function NavBar({token, setToken}){


    return (
        <div className="navbar">
            <nav>
            {!token && <Login setToken={setToken} />}
            {!token && <Register setToken={setToken} />}
            {token && <Logout setToken={setToken} />}
            <Basket token={token} />
            </nav>
        </div>
    );
}