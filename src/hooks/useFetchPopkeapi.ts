import { useEffect, useState } from "react"


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
    })


    useEffect(() => {
      getFetch()
    }, [url])
    


    const getFetch = async () => {
        
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
        })

    }


  return state
}

export default useFetchPopkeapi
