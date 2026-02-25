const API_BASE = 'http://localhost:3000';

export const register = async (name, email, password) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
    });
    return res.json();
}

export const login = async (email, password) =>{
    const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
    return res.json();
}

export const getProducts = async()=>{
    const res = await fetch(`${API_BASE}/products`);
    return res.json();
}

export const getProductsById = async (id) => {
    const res = await fetch(`${API_BASE}/products/${id}`);
    return res.json();
}

export const addToBasket = async (product_id, quantity, token) => {
    const res = await fetch(`${API_BASE}/basket`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({product_id, quantity})
    });
    return res.json();
}

export const deleteFromBasket = async (product_id, token) => {
    const res = await fetch(`${API_BASE}/basket/${product_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.json();
}

export const getBasket = async (token) => {
    const res = await fetch(`${API_BASE}/basket`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.json();
}