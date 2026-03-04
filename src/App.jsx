import { useState } from "react"
import ProductList from "./components/productList"
import NavBar from "./components/NavBar";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      <h1> Golf Gear Online Store</h1>
        <>
        <NavBar token={token} setToken={setToken}/>
        <ProductList token={token} />  
        </>
      
    </div>
  )
}

export default App
