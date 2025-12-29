import React from 'react';
import Menubar from './Components/Menubar/Menubar.jsx';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ContactUs from './pages/Contact/Contact.jsx';
import ExploreFood from './pages/ExploreFood/ExploreFood.jsx';


const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/explore' element={<ExploreFood />} />
      </Routes>
    </div>
  )
}

export default App;
