import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './LoaderCom'




const AllFoods = () => {
    let [read, setRead] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get('/api/v1/read');
            setRead(res.data['data']);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
      

        fetchData();
    }, []);

    const remove=async(id)=>{
      try {
        await axios.delete(`/api/v1/delete/${id}`);
        fetchData()
        alert('Item deleted successful')
        
      } catch (error) {
        console.log(error)
        alert('item deleted failed')
        
      }



    }
    

    return (
        <div className="container">
            
           
            <div className="row">
                <div className='div'></div>
            <hr className='hr'/>
                <h3 >All food</h3>
            
                {read.length===0?(<Loader/>):

                (read.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        
                        <div className="card rounded-3">
                            <div className='image-container'>
                            <img  src={item['FoodImage']} alt="" className="image" />
                            <div className='price'> Price:${item['Price']}</div>
                            </div>
                            
                            <div className="card-body">
                                <h5 className="card-title">{item['FoodName']}</h5>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                            <Link className='btn edit text-center ' to={`/update/${item['_id']}`}>Edit</Link>
                                <button onClick={() => remove(item['_id'])} className="button-delete  ">Delete</button>
                               
                            </div>
                        </div>
                    </div>
                )))
                    }
            </div>
            
        </div>
    );
};

export default AllFoods;
