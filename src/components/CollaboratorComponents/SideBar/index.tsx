import { ActiveLink } from '../../ActiveLink'
import styles from './styles.module.scss'
import { BiConversation} from 'react-icons/bi'
import { RiDashboardLine, RiLockPasswordLine} from 'react-icons/ri'

import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'


export function CollaboratorSideBar(){

    const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
           <h1>LOGO </h1>

      
           <ActiveLink href="/user/collaborator/dashboard" activeClassName={styles.active}><a><RiDashboardLine size={30} /> </a></ActiveLink>
           <ActiveLink href="/user/collaborator/conversation " activeClassName={styles.active}><a><BiConversation size={30} /> </a></ActiveLink>
           <ActiveLink href="/user/collaborator/password" activeClassName={styles.active}><a><RiLockPasswordLine size={30} /> </a></ActiveLink>

        </div>
        </>
    )
}


