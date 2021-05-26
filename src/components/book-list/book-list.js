import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBooksService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';


import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const { booksService } = this.props;
    const data = booksService.getBooks();

    // 2. dispacth action to store
    this.props.booksLoaded(data);
  }


  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBooksService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);