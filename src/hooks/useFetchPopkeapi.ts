import { useEffect, useState } from "react"



const localCache: Record<string, unknown> = {};

interface FetchData<T>{
    data?: T,
    isLoading: boolean,
    hasError: boolean,
    error?: {
        status: number | string,
        message: string
    }
}

function useFetchPopkeapi<T extends object>( url: string ) {


    const [fetchResponse, setFetchResponse] = useState<FetchData<T>>({
        isLoading: true,
        hasError: false,
    });


    useEffect(() => {
      getFetch()
    }, [url]);
    

    const setLoadingState = () => {
        setFetchResponse({
            isLoading: true,
            hasError: false,
        });
      }


    const getFetch = async () => {

        if (localCache[url]) {
            setFetchResponse({
                data: localCache[url] as T,
                isLoading: false,
                hasError: false
            })
            return;
        }
        
        setLoadingState();

        const response = await fetch(url);

        if (!response.ok) {
            setFetchResponse({
                data: {} as T,
                isLoading: false,
                hasError: true,
                error: {
                    status: response.status,
                    message: response.statusText
                }
                  
            })
            return;
        }

        const data = await response.json();

        setFetchResponse({
            data: data,
            isLoading: false,
            hasError: false,
        });


        localCache[url] = data;

    }


  return fetchResponse;
}

export default useFetchPopkeapi;
