import Button from '../../button/Button'
import styles from './InfoCommunity.module.scss'

const InfoCommunity = () => {
  return (
    <div className={ styles.container }>
        <img 
            className={ styles.container__logocommunity }
            src="../../../public/img/logo-comunity.png" 
            alt="logo-community" 
        />
        <div className={ styles.container__description }>
            <div className={ styles.container__description_button }>
                <p>Join the UNITE community, go clone the repo and feel free to add whatever you want</p>
                <Button children="Pokemon GO" />
            </div>
            <img 
                className={ styles.container__description_imgswiper }
                src="../../../public/img/swipper-type.png" 
                alt="Image-swiper" 
            />
        </div>
    </div>
  )
}

export default InfoCommunity
