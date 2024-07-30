import { useEffect, useState } from "react"



const localCache: { [key: string]: any } = {};

interface FetchData<T>{
    data?: T,
    isLoading: boolean,
    hasError: boolean,
    error?: {
        status: number | string,
        message: string
    }
}


function useFetchPopkeapi<T>( url: string ) {

    const [state, setState] = useState<FetchData<T>>({
        isLoading: true,
        hasError: false,
    });


    useEffect(() => {
      getFetch()
    }, [url]);
    

    const setLoadingState = () => {
        setState({
            isLoading: true,
            hasError: false,
        });
      }


    const getFetch = async () => {

        if (localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false
            })
            return;
        }
        
        setLoadingState();

        await new Promise((resolve) => setTimeout(resolve, 0.500));

        const response = await fetch(url);

        if (!response.ok) {
            setState({
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

        setState({
            data: data,
            isLoading: false,
            hasError: false,
        });


        localCache[url] = data;

    }


  return state
}

export default useFetchPopkeapi
