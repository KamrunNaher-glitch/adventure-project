import React from 'react';
import "./Navber.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='min-h-20 bg-slate-500 flex justify-between items-center '>
            <div >
                <h1 className='font-semibold text-yellow-300 text-xl ml-4'>ROAMING ADVENTURE</h1>
            </div>
            <div >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/AllBlogs" className="ml-4">All Blog</NavLink>
                <NavLink to="/about" className="ml-4">About</NavLink>
                <NavLink to="/Profile" className="ml-4">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/login">
                <button className='btn btn-primary mr-4'>Login</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Navbar;
