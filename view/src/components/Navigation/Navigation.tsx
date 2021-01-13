import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  if (window.localStorage.getItem('user') === null) {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/" className="nav__link">
              Main
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/register" className="nav__link">
              Register
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/login" className="nav__link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="nav">
        <h1 className="nav__title">Welcome. {window.localStorage.getItem('user')}</h1>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/" className="nav__link">
              Panel
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/" className="nav__link">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
