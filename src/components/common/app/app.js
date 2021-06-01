import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/homePage';
import BooksPage from '../../pages/booksPage';
import NavBar from '../navBar/navBar';

import { HOME } from '../../../utils/routes/routes';
import { BOOKS } from '../../../utils/routes/routes';


import { withBooksService } from '../../hoc/withBooksService';

const App = () => {
    return (
        <main role="main" className="container">
          <NavBar />
          <Switch>
            <Route
              path={ HOME }
              component={HomePage}
              exact />  
            <Route
              path={ BOOKS }
              component={BooksPage}
              />
          </Switch>
        </main>
      );
}

export default withBooksService()(App);