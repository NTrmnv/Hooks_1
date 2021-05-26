import React from 'react';
import { BooksConsumer } from '../books-context';


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

export default withBooksService;  