import React, { useContext } from 'react';
import { StoreContext } from '../../../context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const normalize = (s) => (s || '').toLowerCase().trim();
const FoodDisplay = ({ category = 'All', searchText = '' }) => {
    const { foodList } = useContext(StoreContext);
    const list = Array.isArray(foodList) ? foodList : [];
    const cat = normalize(category);
    const query = normalize(searchText);
    const filteredFoods = list.filter(food => {
        const foodCat = normalize(food.category);
        const matchesCategory = cat === 'all' || foodCat.includes(cat);
        const matchesSearch = !query || normalize(food.name).includes(query) || normalize(food.description).includes(query);
        return matchesCategory && matchesSearch;
    });
    return (
        <div className="container">
            <div className="row">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food, index) => (
                        <FoodItem
                            key={index}
                            name={food.name}
                            description={food.description}
                            id={food.id}
                            imageUrl={food.imageUrl}
                            price={food.price}
                        />
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
