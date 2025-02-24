import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { user, handleLogout } = useContext(authContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-500 text-white px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-yellow-300 text-2xl font-bold">ROAMING ADVENTURE</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
                    <NavLink to="/AllBlogs" className="hover:text-yellow-300">All Blogs</NavLink>
                    <NavLink to="/About" className="hover:text-yellow-300">About</NavLink>
                    <NavLink to="/Profile" className="hover:text-yellow-300">Profile</NavLink>
                </div>

                {/* Login/Logout Button (Desktop) */}
                <div className="hidden md:block">
                    {user ? (
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    ) : (
                        <NavLink to="/login">
                            <button className="btn btn-primary">Login</button>
                        </NavLink>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-2xl focus:outline-none" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden flex flex-col items-center gap-4 py-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                <NavLink to="/" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/AllBlogs" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>All Blogs</NavLink>
                <NavLink to="/About" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>About</NavLink>
                <NavLink to="/Profile" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Profile</NavLink>

                {/* Login/Logout Button (Mobile) */}
                {user ? (
                    <button onClick={handleLogout} className="btn btn-primary mt-2">Logout</button>
                ) : (
                    <NavLink to="/login">
                        <button className="btn btn-primary mt-2">Login</button>
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;



