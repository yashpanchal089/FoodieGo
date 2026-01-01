import React, { useContext } from 'react';
import { StoreContext } from '../../../context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = () => {

    const store = useContext(StoreContext);
    const foodList = Array.isArray(store?.foodList) ? store.foodList : [];
    return (
        <div className="container">
            <div className="row">
                {foodList.length > 0 ? (
                    foodList.map((food, index) => (
                        <FoodItem key={index}
                        name={food.name} 
                        description={food.description}
                        id={food.id}
                        imageUrl={food.imageUrl}
                        price={food.price} />
                    ))
                ) : (
                    <div className="text-center mt-4">
                        <h4>No Food Found</h4>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodDisplay;
