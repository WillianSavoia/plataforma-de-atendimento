import { ActiveLink } from '../ActiveLink'
import styles from './admCompany.module.scss'

import {RiLockPasswordLine, RiDashboardLine} from 'react-icons/ri'
import {BiConversation} from 'react-icons/bi'

import {HiUserGroup} from 'react-icons/hi'
import { ThemeContext } from '../../context/ThemeContext'

import {useContext} from 'react'


export function AdmCompanySideBar(){
     
    const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
           <h1>logo</h1>

        
           <ActiveLink href="/user/admcompany/dashboard" activeClassName={styles.active}><a><RiDashboardLine size={30}/></a></ActiveLink>
           <ActiveLink href="/user/admcompany/collaborator/create" activeClassName={styles.active}><a><HiUserGroup size={30}/> </a></ActiveLink>
           <ActiveLink href="/user/admcompany/collaborator/conversation" activeClassName={styles.active}><a><BiConversation size={30}/> </a></ActiveLink>
           <ActiveLink href="/user/admcompany/change-password" activeClassName={styles.active}><a><RiLockPasswordLine size={30}/></a></ActiveLink>
         
       
        </div>
        </>
    )
}

<RiDashboardLine size={20}/>