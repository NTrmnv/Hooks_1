import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../bookListItem/bookListItem';
import { withBooksService } from '../../hoc/withBooksService';
import { booksLoaded } from '../../../redux/actions/actions';
import { compose } from '../../../utils/compose';

import '../../../styles/bookList.sass';

function BookList ({ booksService, booksLoaded, books }) {

  useEffect(() => {
    const data = booksService.getBooks();
    booksLoaded(data);
  }, []);

    return (
      <ul className="booklist">
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