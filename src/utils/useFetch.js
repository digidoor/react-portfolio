import { useState, useEffect } from 'react';

const useFetch = (url) =>
{
    const [data, setData] = useState(null);
    const [name, setName] = useState("Saria");
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>
    { 
        fetch(url)
            .then( response =>
            {
                if(!response.ok)
                    throw Error("Fetch failed some odd reason.");
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => { setIsPending(false); setError(error.message); });
    }, [url]);
    return { data, isPending, error };
}
 
export default useFetch;