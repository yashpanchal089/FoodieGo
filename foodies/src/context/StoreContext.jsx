import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);


export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);

    const fetchfoodList = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/foods');
            setFoodList(response.data || []);
        } catch (err) {
            console.error('Failed to fetch foods:', err);
            setFoodList([]);
        }
    }

    const contextValue = {
        foodList
    };

    useEffect(() => {
        async function loadData() {
            await fetchfoodList();
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}