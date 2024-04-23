import React from 'react';
import Navbar from './Navbar'




const MasterLayout = (props) => {
    return (
        <div className="container-fluid">
            
            <div className="row">
                <div className="col-md-3">
                 <Navbar />
                </div>
                <div className="col-md-9">
                
                    {props.children}
                  
                </div>
                
            </div>
           
        </div>
    );
};

export default MasterLayout;