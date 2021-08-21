import React, { useState } from 'react';

import useFetch from '../hooks/useFetch';
import useFecthPaginate from '../hooks/useFecthPaginate';

import BookList from '../organisms/bookList';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const booksPerTime = 5;

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function Home() {
    const [page, setPage] = useState(1);
    const classes = useStyles();
    const { dataApi: tagData, loading: tagLoading } = useFetch('/tag/books', true);
    const { dataApi: goodReadData, loading: goodReadsLoading } = useFecthPaginate('/goodreads/books', page, tagData, booksPerTime);
    goodReadData.filter(book => book.id);

    return <div>
        <BookList
            tagData={tagData}
            setPage={setPage}
            tagLoading={tagLoading}
            page={page}
            goodReadsLoading={goodReadsLoading}
            goodReadData={goodReadData}
            booksPerTime={booksPerTime}
        />
        <Backdrop className={classes.backdrop} open={tagLoading || goodReadsLoading} >
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
}

export default Home;
