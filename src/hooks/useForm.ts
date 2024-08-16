import { ChangeEvent, useState } from "react"

function useForm( initialState: { [key: string]: string } ) {

    const [formState, setFormState] = useState<{ [key: string]: string }>( initialState );

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

