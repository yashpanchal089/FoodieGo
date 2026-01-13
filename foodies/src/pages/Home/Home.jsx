import React, { useState } from 'react';
import Header from '../../Components/Menubar/Header/Header.jsx';
import ExploreMenu from '../../Components/Menubar/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../Components/Menubar/FoodDisplay/FoodDisplay.jsx';

const Home = () => {
    const [category, setCategory] = useState('All');
    return (
        <main className='container'>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} searchText={''}/>
        </main>
    )
}

export default Home;
