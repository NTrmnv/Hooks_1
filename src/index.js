import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BooksService from './service/book-service';
import { BooksProvider } from './components/books-context';

import store from './store';

const booksService = new BooksService();

ReactDOM.render(
  <React.StrictMode>
   <Provider store={ store }>
    <ErrorBoundary>
      <BooksProvider value={ booksService }>
        <Router>
          <App/>
        </Router>
      </BooksProvider>
    </ErrorBoundary>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

