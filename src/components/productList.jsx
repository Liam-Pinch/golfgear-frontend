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
    <>
     <h2>Products</h2>
        <div className="product-list">
            {products.map(p => (
                <div key={p.id} className="product">
                <strong>{p.name}</strong> - £{p.price.toFixed(2)}
                {p.description && <p>{p.description}</p>}
                <button className="add-to-basket" onClick={() => handleAddToBasket(p.id)}>
                Add to Basket
            </button>
        </div>
    ))}
    </div>
    
    </>
)

}