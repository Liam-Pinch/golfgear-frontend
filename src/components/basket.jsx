import React, { useEffect } from "react";
import { getBasket } from "../api/api";

export default function Basket({token}){
    const [basketItems, setBasketItems] = React.useState([]);

    const handleBasketClick = async () => {
        if(!token){
            alert('Please login to view your basket');
            return;
        }
        const res = await getBasket(token);
        if(res.length >= 0){
            setBasketItems(res);
            console.log(res);  
        }else{
            alert('Failed to fetch basket');
        }
    }
    
    return (
        <div className="basket">
            <button className="basket-button" onClick={handleBasketClick}>Basket</button>
            {basketItems.map(item => (
                <div key={item.productId} className="basket-item">
                    <strong>{item.name}</strong> - Quantity: {item.quantity}   
                </div>
            ))}
        </div>
    );
}