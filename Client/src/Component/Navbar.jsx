import React from 'react';
import Logo from '../assets/icon/Logo.svg';
import { sidebarData } from './sidbarData';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='container-fluid sideBar  '>
            <img src={Logo} alt="Logo" />
            <div  className='align-content-center '>
                <hr />
                <h5>Menu</h5>
                <ul className='list-unstyled sidelist ' >
                    {sidebarData.map((item, index) => (
                        <li key={index}  >
                            <Link id={location.pathname === item.link ? 'active' : ''}  className='nav-link  d-flex flex-row justify-content-center align-items-center ' to={item.link}>
                                <div  className='icon'><img className='img' src={item.icon} alt={item.title} /></div>{" "}
                                <div className='tittle'>{item.title}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
// 
export default Navbar;
