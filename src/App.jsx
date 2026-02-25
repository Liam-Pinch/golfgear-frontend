import { useState } from "react"
import ProductList from "./components/productList"
import Login from "./pages/login"
import Register from "./pages/register"
import Logout from "./components/logout";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      <h1> Golf Gear Online Store</h1>
      {!token ? (
        <>
        <h2>Login</h2>
        <Login setToken={setToken} />
        <h2>Register</h2>
        <Register />
        </>
      ) : (
        <>
        <ProductList token={token} />  
        <Logout setToken={setToken} /> 
        </>
      )}
    </div>
  )
}

export default App
