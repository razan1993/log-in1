import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="menu">
      <ul className="right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/Todo-list">Todo-list</Link>
        </li>
        <li>
          <Link to="/Cal1">cal</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
