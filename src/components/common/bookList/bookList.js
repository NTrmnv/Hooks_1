import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../bookListItem/bookListItem';
import { withBooksService } from '../../hoc/withBooksService';
import { booksLoaded } from '../../common/actions/index';
import { compose } from '../../../utils/compose';


import '../../../styles/bookList.sass';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const { booksService } = this.props;
    const data = booksService.getBooks();

    // 2. dispacth action to store
    this.props.booksLoaded(data);
  }

  // useEffect(() => {
  //   const data = booksService.getBooks();
  //   booksLoaded(data);
  // }, [booksService]);


  render() {
    const { books } = this.props;
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