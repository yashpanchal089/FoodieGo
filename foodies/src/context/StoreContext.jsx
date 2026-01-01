import { createContext, useEffect, useState } from "react";
import { fetchfoodList } from "../service/foodService.js";

export const StoreContext = createContext(null);


export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);

    const contextValue = {
        foodList
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