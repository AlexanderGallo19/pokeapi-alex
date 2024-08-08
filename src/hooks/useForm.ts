import { ChangeEvent, useEffect, useState } from "react"

function useForm( initialState: { [key: string]: string } ) {

    const [formState, setFormState] = useState<{ [key: string]: string }>( initialState );
    const [debouncedInputValue, setDebouncedInputValue] = useState<{ [key: string]: string }>(initialState);

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

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedInputValue(formState);
      }, 500);
    
      return () => clearTimeout(timeoutId);
    }, [formState])
    

  return {
    ...formState,
    formState,
    debouncedInputValue,
    handleInputChange,
    handleResetInput
  }
}

export default useForm

