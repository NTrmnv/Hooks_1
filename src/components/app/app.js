import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, BooksPage } from '../pages';
import NavBar from '../nav-bar';

import { withBooksService } from '../hoc';

const App = ({ booksService }) => {
    return (
        <main role="main" className="container">
          <NavBar />
          <Switch>
            <Route
              path="/"
              component={HomePage}
              exact />  
            <Route
              path="/books"
              component={BooksPage}
              />
          </Switch>
        </main>
      );
}

export default withBooksService()(App);