import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {assets} from '../../assets/assets';
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';

const AddFood = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    category: 'biryani',
    price: ''
  });

  const onChangeHandler = (event) => {
    const name =event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error('Please select an image');
      return;
    }
    try {
      await addFood(data, image);
      toast.success('Food added successfully');
      setData({
        name: '',
        description: '',
        category: 'biryani',
        price: ''
      });
      setImage(null);
    } catch (error) {
      toast.error('Error while adding food');
    }

    
  };

  return (

    <div className="mx-3 mt-3">
      <div className="row">
        <div className="card col-md-3">
          <div className="card-body mx-1">
            <h2 className="mb-4" style={{ textAlign: "center" }}>Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={98}/>
                </label>
                <input type="file" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" placeholder='Jain Biryani' className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name}/>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea placeholder='Write your customization here' className="form-control" id="description" rows="5" required name="description" onChange={onChangeHandler} value={data.description}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-control" id="category" required name="category" onChange={onChangeHandler} value={data.category}>
                  <option value="biryani">Biryani</option>
                  <option value="cake">Cake</option>
                  <option value="burger">Burger</option>
                  <option value="pizza">Pizza</option>
                  <option value="chinese-rolls">Chinese Rolls</option>
                  <option value="salad">Salad</option>
                  <option value="ice-cream">Ice-Cream</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input placeholder='200.00' type="number" className="form-control" id="price" name='price' onChange={onChangeHandler} value={data.price}/>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFood;
