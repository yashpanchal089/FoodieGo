import React from 'react';
import Header from '../../Components/Menubar/Header/Header.jsx';
import ExploreMenu from '../../Components/Menubar/ExploreMenu/ExploreMenu.jsx';

const Home = () => {
    return (
        <main className='container'>
            <Header />
            <ExploreMenu />
        </main>
    )
}

export default Home;
