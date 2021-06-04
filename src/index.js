import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/common/app/app';
import ErrorBoundary from './components/common/errorBoundary/errorBoundary';
import BooksService from './service/bookService';
import { BooksProvider } from './components/common/booksContext/booksContext';

import store from './redux/store';

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

// some comment
// & some more