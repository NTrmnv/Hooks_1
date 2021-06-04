import React from 'react';

import '../../../styles/bookListItem.sass';

import { Link, useHistory } from 'react-router-dom';

import { BOOKS_TITLE, BOOKS_AUTHOR, BOOKS_PRICE } from '../../../utils/routes/routes';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  const history = useHistory();

  const goToBooks = () => {
      history.push("/books");
  }

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={ coverImage } alt="cover"/>
            </div>
            <div className="book-details">
                <Link to={ BOOKS_TITLE } className="book-title">{ title }</Link>
                
                <Link to={ BOOKS_AUTHOR } className="book-author">{ author }</Link>
                
                <Link to={ BOOKS_PRICE } className="book-price">${ price }</Link>

                <button onClick={ goToBooks } className="btn btn-secondary">Go back</button>

            </div>            
        </div>
    )};

export default BookListItem;