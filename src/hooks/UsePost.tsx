import React, { useState } from 'react'

export const UsePost = (url: string, body: any) => {

  const [apiResponse, setApiResponse] = useState({});
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchLoginApi = async () => {
    setLoading(true);
    try{
        const apiResponseData = await fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        setApiResponse(apiResponseData);
        apiResponse && setLoading(false);

    }catch(error){
        setLoading(false);
        console.log(error);
    }
}

  return { apiResponse, fetchLoginApi, loading };
}

