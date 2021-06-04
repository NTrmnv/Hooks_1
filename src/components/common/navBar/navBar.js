import React from 'react';
import { Link } from 'react-router-dom';

import { HOME, BOOKS } from '../../../utils/routes/routes';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to={ HOME }>
          <div className="navbar-brand">Main Page</div>
        </Link>
        <Link to={ BOOKS }>
          <div className="navbar-brand">Books</div>
        </Link>
      </div>
    </nav>
    );
};

export default NavBar;