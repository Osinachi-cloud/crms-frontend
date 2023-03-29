import React, { useEffect, useState } from 'react'

const UseFetch = (url: string, userData: any) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<Boolean>(false);

    const fetchApi = async()=> {
        try{
            setLoading(true);
            const apiResponse: any = await fetch(url);
            setData(apiResponse);
            setLoading(false);
        }catch(error){
            setLoading(false);
        }
    }
    const reFetchApi = async()=> {
        try{
            setLoading(true);
            const apiResponse: any = await fetch(url);
            setData(apiResponse);
            setLoading(false);
        }catch(error){
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchApi();
    }, [])
  return {data, loading, reFetchApi};
}

export default UseFetch
