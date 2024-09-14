import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) =>  res.json())
        .then((data) => setData(data[currency]))
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        //         console.log(response.body)
        //         if (!response.ok) {
        //             throw new Error(`Failed to fetch data: ${response.statusText}`);
        //         }
        //         const result = await response.json();
        //         setData(result);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // };

        // fetchData();
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;