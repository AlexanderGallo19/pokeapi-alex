import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'
import { type Links } from '../../models/links.model'
import styles from './NavbarResponsive.module.scss'


interface NavbarResponsiveM {
    links: Links[],
}


const NavbarResponsive = ({
    links,

}:NavbarResponsiveM) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div  
        className={ styles.container } 
        onClick={() => setIsOpen(!isOpen)}
    >
        <IoMenuSharp />
        {
            isOpen && (
                <div className={ styles.container__linksresponsive }>
                    {links.map( link => (
                                <Link 
                                    key={ link.url } 
                                    to={ link.url } 
                                > 
                                    { link.name } 
                                </Link>    
                        ))}
                </div>
            )
        }
    </div>
  )
}

export default NavbarResponsive
