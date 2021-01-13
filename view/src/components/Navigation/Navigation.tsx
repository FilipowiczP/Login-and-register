import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  const handleLogout = (): void => {
    localStorage.removeItem('user');
    window.location.replace('/logout');
  };
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
            <Link to="/logout" className="nav__link" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
