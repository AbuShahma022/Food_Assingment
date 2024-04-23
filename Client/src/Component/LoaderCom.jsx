import React from 'react';
import loaderIcon from '../assets/icon/Spinner-1s-200px.svg'; // Import the SVG file

const LoaderCom = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100  vh-100">
            <img src={loaderIcon} alt="Loader" /> {/* Use img tag to display the SVG */}
        </div>
    );
};

export default LoaderCom;
