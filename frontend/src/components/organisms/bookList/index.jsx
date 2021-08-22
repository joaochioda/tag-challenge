import React, { useRef, useCallback } from 'react';
import PropTypes from "prop-types";
import { Container } from './style.js';
import CardBook from '../../molecules/bookCard';

const BookList = ({ setPage, tagData, tagLoading, page, goodReadsLoading, booksPerTime, goodReadData, onClick }) => {
    const observer = useRef();

    function findRate(isbn) {

        const findByIsbn13 = goodReadData.find(item => item.isbn13 == isbn);
        if (!findByIsbn13) {
            const findByIsbn = goodReadData.find(item => item.isbn == isbn);
            if (!findByIsbn) {
                return 0;
            } return parseFloat(findByIsbn.average_rating);
        }
        return parseFloat(findByIsbn13.average_rating)
    }

    const lastBookRef = useCallback(node => {
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !tagLoading && !goodReadsLoading) {
                setPage((previousPage) => previousPage + 1);
            }
        }, [])
        if (node) observer.current.observe(node)
    });

    return (
        <Container>
            {tagData.slice(0, page * booksPerTime).map((book, index) => {

                const cardBook = () => (
                    <CardBook
                        src={book.cover.url}
                        alt={book.name}
                        textTag={'TAG'}
                        rateTag={book.totalRatings / book.numRatings}
                        textGoodRead={'GOODREADS'}
                        rateGoodRead={findRate(book.isbn)}
                    />
                );

                if (page * booksPerTime === index + 1) {
                    return <div
                        key={book.objectId}
                        ref={lastBookRef}
                        style={{ justifySelf: 'center' }}
                        onClick={() => onClick(book.objectId)}
                        data-testid="book"
                    >
                        {cardBook()}
                    </div>
                } else {
                    return <div
                        key={book.objectId}
                        style={{ justifySelf: 'center' }}
                        onClick={() => onClick(book.objectId)}
                        data-testid="book"
                    >
                        {cardBook()}
                    </div>
                }
            })}
        </Container>
    )
}

export default BookList;

BookList.propTypes = {
    setPage: PropTypes.func.isRequired,
    tagData: PropTypes.array.isRequired,
    tagLoading: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    goodReadsLoading: PropTypes.bool.isRequired,
    booksPerTime: PropTypes.number.isRequired,
    goodReadData: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};
