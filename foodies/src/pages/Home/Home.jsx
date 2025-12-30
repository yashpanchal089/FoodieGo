import React from 'react';
import Header from '../../Components/Menubar/Header/Header.jsx';
import ExploreMenu from '../../Components/Menubar/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../Components/Menubar/FoodDisplay/FoodDisplay.jsx';

const Home = () => {
    return (
        <main className='container'>
            <Header />
            <ExploreMenu />
            <FoodDisplay />
        </main>
    )
}

export default Home;
