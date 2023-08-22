import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState()
    const [isloading, setIsloading] = useState(false)
    const [error, setError] = useState(null)
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            query: { ...query },


        },
        headers: {
            'X-RapidAPI-Key': 'b0f77f14f3msha2d30a6e49bd9d4p14242fjsnfaccb01bd0de',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        setIsloading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setIsloading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')

        } finally {
            setIsloading(false)
        }

    }
    useEffect(() => {
        fetchData();


    }, [])
    const reFetch = () => {
        setIsloading(true);
        fetchData();

    }
    return (data, isloading, error, reFetch)


}

export default useFetch