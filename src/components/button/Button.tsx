import { cssVar } from '../../models/cssType';
import { ButtonM } from './Button.model';
import styles from './Button.module.scss';

const Button = ({
     children,
     bgcolor,
     border,
     color,
     fontFamily,
     fontSize
}:ButtonM) => {


    const handleStylesButton: cssVar = {
        "--bg-color": bgcolor,
        "--border": border,
        "--color": color,
        "--font-family": fontFamily,
        "--font-size": fontSize,
    }

    

  return (
    <button 
        className={ styles.container }
        style={ handleStylesButton }    
    >
       { children }
    </button>
  )
}

export default Button
