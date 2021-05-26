import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/">
          <div className="navbar-brand">Main Page</div>
        </Link>
        <Link to="/books">
          <div className="navbar-brand">Books</div>
        </Link>
      </div>
    </nav>
    );
};

export default NavBar;