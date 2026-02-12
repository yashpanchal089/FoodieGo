import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar.jsx';
import Home from './pages/Home/Home.jsx';
import ExploreFood from './pages/ExploreFood/ExploreFood.jsx';
import ContactUs from './pages/Contact/Contact.jsx';
import FoodDetails from './pages/FoodDetails/FoodDetails.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Login from './Components/Menubar/Login/Login.jsx';
import Register from './Components/Menubar/Register/Register.jsx';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div>
      <Menubar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  )
}

export default App;
