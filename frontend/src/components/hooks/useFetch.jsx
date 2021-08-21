import { useState, useEffect } from "react";
import { api } from '../../services/api';
import orderEdition from '../utils/orderEdition';

const useFetch = (url, order) => {
    const [dataApi, setDataApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (url) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const { data: { jsonBooks: { results } } } = await api.get(url);
                    if (order) {
                        const orderedResults = orderEdition(results);
                        setDataApi(orderedResults);
                    } else {
                        setDataApi(results);
                    }

                } catch (error) {
                    setError(error);

                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, []);

    return { error, dataApi, loading };
}

export default useFetch;