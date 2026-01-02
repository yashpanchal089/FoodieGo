import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar.jsx';
import Home from './pages/Home/Home.jsx';
import ExploreFood from './pages/ExploreFood/ExploreFood.jsx';
import ContactUs from './pages/Contact/Contact.jsx';
import FoodDetails from './pages/FoodDetails/FoodDetails.jsx';

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </div>
  )
}

export default App;
