import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { fetchfoodList } from "../service/foodService.js";

export const StoreContext = createContext(null);


export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token, setToken] = useState(() => localStorage.getItem('token') || "");

    const increaseQty = async (foodId) => {
        setQuantities((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));

        await axios.post('http://localhost:8081/api/cart',
            { foodId },
            { headers: { Authorization: `Bearer ${token}` } });
    }

    const decreaseQty = async (foodId) => {
        setQuantities((prev) => ({ ...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0 }));

        await axios.post('http://localhost:8081/api/cart/remove', { foodId }, { headers: { Authorization: `Bearer ${token}` }});
    };

    const removedFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[foodId];
            return updatedQuantities;
        });
    };

    const contextValue = {
        foodList,
        increaseQty,
        decreaseQty,
        quantities,
        removedFromCart,
        token,
        setToken,
    };

    // keep localStorage in sync with token state
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchfoodList();
                setFoodList(Array.isArray(data) ? data : []);
                if (localStorage.getItem('token')) {
                    setToken(localStorage.getItem('token'));
                }
            } catch (err) {
                console.error("Failed to load food list", err);
                setFoodList([]);
            }
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}