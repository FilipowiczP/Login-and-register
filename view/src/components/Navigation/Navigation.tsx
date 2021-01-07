import React from "react";
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () =>{
    return(
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <Link to="/" className="nav__link">Main</Link>
                </li>
                <li className="nav__list-item">
                    <Link to="/register" className="nav__link">Register</Link>
                </li>
                <li className="nav__list-item">
                    <Link to="/login" className="nav__link">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;