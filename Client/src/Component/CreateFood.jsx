import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreateFood = () => {
  const navigate = useNavigate();
  const [foodData, setFoodData] = useState({
    FoodName: '',
    FoodCode: '',
    FoodImage: '',
    FoodCategory: '',
    QTY: '',
    Price: ''
  });
  

  const inputChange = (property, value) => {
    setFoodData(prevObj => ({
      ...prevObj,
      [property]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      await axios.post('/api/v1/create', foodData);
      // Clear form after successful submission
      setFoodData({
        FoodName: '',
        FoodCode: '',
        FoodImage: '',
        FoodCategory: '',
        QTY: '',
        Price: ''
      });

      
      // Provide feedback to the user
      alert('Food item created successfully!')
      navigate('/')
    } catch (error) {
      console.error('Error creating food item:', error);
      // Provide feedback to the user about the error
      alert('An error occurred while creating the food item.')
    }
  };

  return (
    <div className="container">
      <h1>Create Food Item</h1>
      <form onSubmit={handleSubmit} className='row '>
        <div className="mb-3 col-md-4  ">
          <label htmlFor="foodName" className="form-label">Food Name:</label>
          <input type="text" id="foodName" name="foodName" value={foodData.FoodName} onChange={(e) => inputChange('FoodName', e.target.value)} className="form-control" />
        </div>
        <div className="mb-3 col-md-4  ">
          <label htmlFor="foodCode" className="form-label">Food Code:</label>
          <input type="text" id="foodCode" name="foodCode" value={foodData.FoodCode} onChange={(e) => inputChange('FoodCode', e.target.value)} className="form-control" />
        </div>

        <div className="mb-3 col-md-4  ">
          <label htmlFor="foodImage" className="form-label">Food Image:</label>
          <input type="text" id="foodImage" name="foodImage" placeholder='provide image link' value={foodData.FoodImage} onChange={(e) => inputChange('FoodImage', e.target.value)} className="form-control input-field" />
        </div>

        <div className="mb-3 col-md-4 ">
          <label htmlFor="foodCategory" className="form-label">Food Category:</label>
          <input type="text" id="foodCategory" name="foodCategory" value={foodData.FoodCategory} onChange={(e) => inputChange('FoodCategory', e.target.value)} className="form-control" />
        </div>

        <div className="mb-3 col-md-4 ">
          <label htmlFor="qty" className="form-label">Quantity:</label>
          <input type="text" id="qty" name="qty" value={foodData.QTY} onChange={(e) => inputChange('QTY', parseFloat(e.target.value))} className="form-control" />
        </div>

        <div className="mb-3 col-md-4 ">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" id="price" name="price" value={foodData.Price} onChange={(e) => inputChange('Price', parseFloat(e.target.value))} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary col-md-4  ">Submit</button>
      </form>
    </div>
  );
};

export default CreateFood;
