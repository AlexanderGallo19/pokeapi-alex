import { Link } from 'react-router-dom';
import { cssVar } from '../../models/cssType';
import { ButtonM } from './Button.model';
import styles from './Button.module.scss';

const Button = ({
     children,
     route,
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
    <Link
        to={route} 
        className={ styles.container }
        style={ handleStylesButton }    
    >
       { children }
    </Link>
  )
}

export default Button
