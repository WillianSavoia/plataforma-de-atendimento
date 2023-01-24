import { ActiveLink } from '../ActiveLink'
import styles from './adm.module.scss'
import {FaBuilding} from 'react-icons/fa'
import {BsGear} from 'react-icons/bs'
import Link  from 'next/link'



export function AdmSideBar(){
    return(
        <>
        <div className={styles.container}>
           <Link href="/user/adm" className={styles.logo}>Logo</Link>

           <ActiveLink href="/user/adm/companies" activeClassName={styles.active}><a><FaBuilding size={30}/> </a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig"activeClassName={styles.active}><a><BsGear size={30}/></a></ActiveLink>
         
         
        </div>
        </>
    )
}

