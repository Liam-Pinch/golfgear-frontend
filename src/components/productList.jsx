import { useEffect, useState } from "react"
import {getProducts, getProductsById, addToBasket} from '../api/api';

export default function ProductList({token}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
},[]);

const handleAddToBasket = (productId) => {
    if (!token) return alert('You must be logged in to add items to the basket');
    addToBasket(productId, 1, token).then(res => alert(res.message));
};

return(
    <div>
        <h2>Products</h2>
        <ul>
            {products.map(p =>(
                <li key={p.id}>
                    <strong>{p.name}</strong> - ${'£' + p.price.toFixed(2)}
                    <button onClick={() => handleAddToBasket(p.id)}>Add to Basket</button>
                </li>
            ))}
        </ul>
    </div>
)

}