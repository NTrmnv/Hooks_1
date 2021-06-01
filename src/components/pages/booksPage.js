import React from 'react';
import BookList from '../common/bookList/bookList';
import BooksService from '../../service/bookService';

const BooksPage = () => {
    return (
        <BookList booksService={ BooksService }/>    
    )
}

export default BooksPage;