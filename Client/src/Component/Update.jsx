import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [Existing, setExisting] = useState({
    FoodName: '',
    FoodCode: '',
    FoodImage: '',
    FoodCategory: '',
    QTY: '',
    Price: ''
  });

  const existingInfo = async (id) => {
    try {
      const res = await axios.get(`/api/v1/readById/${id}`);
      if (res.data.status === 'success' && res.data.data.length > 0) {
        setExisting(res.data.data[0]); // Assuming data is an array, take the first element
      } else {
        console.log('Data not found');
      }
    } catch (error) {
      console.error('Error fetching existing food item:', error);
    }
  };

  useEffect(() => {
    existingInfo(id);
  }, [id]); // Fetch data whenever ID changes

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/v1/update/${id}`, Existing);
      alert('Food item updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating food item:', error);
      alert('An error occurred while updating the food item.');
    }
  };

  return (
    <div className="container">
      <h1>Update Food Item</h1>
      <form onSubmit={updateData} className='row ' >
      <div className="mb-3 col-md-4 ">
            <label htmlFor="foodName" className="form-label">Food Name:</label>
            <input  value={Existing.FoodName}  type="text" id="FoodName" name="FoodName" onChange={e=>setExisting({...Existing,FoodName:e.target.value})}    className="form-control" />
          </div>
          <div className="mb-3 col-md-4 ">
            <label htmlFor="foodCode" className="form-label">Food Code:</label>
            <input   value={Existing.FoodCode} type="text" id="FoodCode" name="FoodCode"  onChange={e=>setExisting({...Existing,FoodCode:e.target.value})}   className="form-control" />
          </div>
  
          <div className="mb-3 col-md-4 ">
            <label htmlFor="foodImage" className="form-label">Food Image:</label>
            <input  value={Existing.FoodImage}  type="text" id="FoodImage" name="FoodImage" onChange={e=>setExisting({...Existing,FoodImage:e.target.value})}  className="form-control" />
          </div>
  
          <div className="mb-3 col-md-4 ">
            <label htmlFor="foodCategory" className="form-label">Food Category:</label>
            <input  value={Existing.FoodCategory} type="text" id="FoodCategory" name="FoodCategory"  onChange={e=>setExisting({...Existing,FoodCategory:e.target.value})} className="form-control" />
          </div>
  
          <div className="mb-3 col-md-4 ">
            <label htmlFor="qty" className="form-label">Quantity:</label>
            <input  value={Existing.QTY} type="text" id="QTY" name="QTY" onChange={e=>setExisting({...Existing,QTY:e.target.value})}   className="form-control" />
          </div>
  
          <div className="mb-3 col-md-4 ">
            <label htmlFor="price" className="form-label">Price:</label>
            <input value={Existing.Price} type="text" id="price" name="price" onChange={e=>setExisting({...Existing,Price:e.target.value})}  className="form-control" />
          </div>
        <button type="submit" className="btn btn-primary col-md-3">Update</button>
      </form>
    </div>
  );
};

export default Update;
