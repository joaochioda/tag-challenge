import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import Loading from '../atoms/loading';
import BookDetail from '../organisms/bookDetails';

function Book() {
    const params = useParams();
    const bookId = params.bookId;
    const { dataApi: tagData, loading: tagLoading } = useFetch(`/tag/book/${bookId}`, false);
    const { dataApi: goodReadData, loading: goodReadsLoading } = useFetch(`/goodreads/books/${tagData?.isbn}`, false);

    const history = useHistory();

    const handleOnCLick = () => {
        history.push(`/`);
    }

    return <div>
        {tagData && goodReadData &&
            <BookDetail
                name={tagData?.name}
                url={tagData?.cover?.url}
                edition={tagData?.edition}
                curator={tagData?.curator}
                handleOnCLick={handleOnCLick}
                pages={tagData?.pages}
                ratingsTag={tagData?.totalRatings}
                ratingsGoodRead={goodReadData[0]?.work_ratings_count > 0 ? goodReadData[0]?.work_ratings_count : 0}
            />}
        <Loading tagLoading={tagLoading} goodReadsLoading={goodReadsLoading} />
    </div>;
}

export default Book;
