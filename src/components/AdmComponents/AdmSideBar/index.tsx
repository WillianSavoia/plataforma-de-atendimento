import { ActiveLink } from '../../ActiveLink'
import styles from './styles.module.scss'
import {FaBuilding} from 'react-icons/fa'
import {BsGear} from 'react-icons/bs'
import Link  from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'



export function AdmSideBar(){

    const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
           <Link href="/user/adm" className={styles.logo}>Logo</Link>

           <ActiveLink href="/user/adm/companies/create" activeClassName={styles.active}><a><FaBuilding size={30}/> </a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/whatsapp"activeClassName={styles.active}><a><BsGear size={30}/></a></ActiveLink>
         
         
        </div>
        </>
    )
}

