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
                    const { data } = await api.get(url);
                    if (order) {
                        const orderedResults = orderEdition(data);
                        setDataApi(orderedResults);
                    } else {
                        setDataApi(data);
                    }

                } catch (error) {
                    setError(error);

                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [url]);

    return { error, dataApi, loading };
}

export default useFetch;