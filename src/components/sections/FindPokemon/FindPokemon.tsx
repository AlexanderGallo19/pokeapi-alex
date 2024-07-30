
import useForm from "../../../hooks/useForm";
import InputSearch from "../../InputSearch/InputSearch";
import styles from "./FindPokemon.module.scss";

interface FormInput {
  name: string,
}

const initialState: FormInput = {
  name : '',
}


const FindPokemon = () => {


  const { formState, handleInputChange, handleResetInput, name } = useForm<FormInput>( initialState )



  return (
    <div className={ styles.container }>
        <div className={ styles.container__search }>
            <p>Find your Favorite Pokemon</p>
            <InputSearch value={ name } onInputChange={ handleInputChange } />
        </div>
        <img src="../../../../public/img/charizar.png" alt="Image-charizar" />
    </div>
  )
}

export default FindPokemon
