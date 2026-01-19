import { createContext, useEffect, useState } from "react";
import { fetchfoodList } from "../service/foodService.js";

export const StoreContext = createContext(null);


export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});

    const increaseQty = (foodId) => {
        setQuantities((prev) => ({...prev, [foodId]: (prev[foodId] || 0) + 1 }));
    }

    const decreaseQty = (foodId) => {
        setQuantities((prev) => ({...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0 }));
    }

    const removedFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = {...prevQuantities};
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
    };

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchfoodList();
                setFoodList(Array.isArray(data) ? data : []);
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