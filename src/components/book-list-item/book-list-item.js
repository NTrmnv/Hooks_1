import React from 'react';

import './book-list-item.css';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
                <Link to="/books/title" className="book-title">{ title }</Link>
                
                <Link to="/books/author" className="book-author">{ author }</Link>
                
                <Link to="/books/price" className="book-price">${ price }</Link>

                <button onClick={ goToBooks } className="btn btn-secondary">Go back</button>

            </div>            
        </div>
    )};

export default BookListItem;