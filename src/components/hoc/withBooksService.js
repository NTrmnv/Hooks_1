import React from 'react';
import { BooksConsumer } from '../common/booksContext/booksContext';


const withBooksService = () => (Wrapped) => {

    return (props) => {
        return (
            <BooksConsumer>
                {
                    (booksService) => {
                        return(
                            <Wrapped {...props} booksService={booksService}/>
                        );
                    }
                }
            </BooksConsumer>
        );
    }
}

export { withBooksService };  