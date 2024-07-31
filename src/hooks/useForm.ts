import { ChangeEvent, useState } from "react"



interface UseFormReturnType<T> {
  formState: T;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleResetInput: () => void;
}

function useForm<T>( initialState: T ): UseFormReturnType<T>  {

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

