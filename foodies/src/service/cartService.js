import axios from "axios";

const API_URL = "http://localhost:8081/api/cart";

export const addToCart = async (foodId, token) => {
    try {
        await axios.post(API_URL,
            { foodId },
            { headers: { Authorization: `Bearer ${token}` } });

    } catch (error) {
        console.error("Failed to add item to cart", error);
    }
}

export const removeQtyFromCart = async (foodId, token) => {
    try {
        await axios.post(API_URL + "/remove", { foodId }, { headers: { Authorization: `Bearer ${token}` } });

    } catch (error) {
        console.error("Failed to remove item from cart", error);
    }
}

export const getCartData = async (token) => {
    try {
        const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
        return response.data && response.data.items ? response.data.items : {};
    } catch (error) {
        console.error("Failed to load cart data", error);
        return {};
    }
}