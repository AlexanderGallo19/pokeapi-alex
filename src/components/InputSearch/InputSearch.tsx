import styles from "./InputSearch.module.scss";

interface Props {
    value: string,
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch = ({
    value,
    onInputChange
}: Props) => {
  return (
    <input
        type="text"
        placeholder="Look for it"
        name="name"
        value={ value }
        onChange={ onInputChange }
    >
      
    </input>
  )
}

export default InputSearch
