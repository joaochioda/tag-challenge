import React, { useState } from 'react';

import useFetch from '../hooks/useFetch';
import useFecthPaginate from '../hooks/useFecthPaginate';
import { useHistory } from 'react-router-dom';

import BookList from '../organisms/bookList';
import Loading from '../atoms/loading';


const booksPerTime = 5;

function Home() {
    const [page, setPage] = useState(1);
    const { dataApi: tagData, loading: tagLoading } = useFetch('/tag/books', true);
    const { dataApi: goodReadData, loading: goodReadsLoading } = useFecthPaginate('/goodreads/books', page, tagData, booksPerTime);
    const history = useHistory();

    const handleOnCLick = (bookId) => {
        history.push(`/book/${bookId}`);
    }

    return <div>
        <BookList
            tagData={tagData}
            setPage={setPage}
            tagLoading={tagLoading}
            page={page}
            goodReadsLoading={goodReadsLoading}
            goodReadData={goodReadData}
            booksPerTime={booksPerTime}
            onClick={handleOnCLick}
        />
        <Loading tagLoading={tagLoading} goodReadsLoading={goodReadsLoading} />
    </div>
}

export default Home;
