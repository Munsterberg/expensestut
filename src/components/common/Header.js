import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <NavLink to="/" activeClassName="active-link"><li>Home</li></NavLink>
        <NavLink to="/add" activeClassName="active-link"><li>Add Expense</li></NavLink>
      </ul>
    </header>
  );
}

export default Header;
