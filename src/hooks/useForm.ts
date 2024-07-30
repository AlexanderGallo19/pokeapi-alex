import { ChangeEvent, useState } from "react"



interface FormState<T> {
    formState: T
}


function useForm<T>( initialState: T )  {



    const [formState, setFormState] = useState<T>( initialState );

    const handleInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [ name ]: value
        })
        
    }


    const handleResetInput = () => {
        setFormState( initialState );
    }


  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetInput
  }
}

export default useForm

