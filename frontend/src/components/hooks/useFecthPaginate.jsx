import { useState, useEffect } from "react";
import { api } from '../../services/api';

const useFecthPaginate = (url, page, tagData, booksPerTime) => {
    const [dataApi, setDataApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function getIds() {
        const start = (page - 1) * booksPerTime;
        const end = (page * booksPerTime) > tagData.length ? tagData.length : (page * booksPerTime);
        if (start === end) {
            return tagData[start - 1].isbn;
        } else {
            return tagData.slice(start, end).map(book => book.isbn).join(',');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const ids = getIds();
                const { data } = await api.get(`${url}/${ids}`);
                setDataApi((oldState) => [...oldState, ...data]);

            } catch (error) {
                setError(error);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, tagData]);

    return { error, dataApi, loading };
}

export default useFecthPaginate;