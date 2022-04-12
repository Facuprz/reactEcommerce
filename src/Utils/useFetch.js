import { useEffect, useState } from "react"



const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let response = await fetch(url)
                let data = await response.json();
                setLoading(false);
                setData(data);
                setError(false);

            } catch (err) {
                console.log(err);
            }
        }

        getData(url);

    }, [url]);

    return { data, loading , error};

}