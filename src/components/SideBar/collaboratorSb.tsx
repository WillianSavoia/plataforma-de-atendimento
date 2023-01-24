import { ActiveLink } from '../ActiveLink'
import styles from './collaborator.module.scss'
import {BiMessageRoundedAdd,BiMessageRoundedEdit, BiMessageRoundedCheck, BiMessageRoundedX} from 'react-icons/bi'

import {RiLockPasswordLine, RiDashboardLine} from 'react-icons/ri'
import {FaChartBar} from 'react-icons/fa'
import { GoGear } from 'react-icons/go'
import {AiFillMessage} from 'react-icons/ai'


export function CollaboratorSideBar(){
    return(
        <>
        <div className={styles.container}>
           <h1>LOGO </h1>

      
           <ActiveLink href="/user/collaborator/dashboard" activeClassName={styles.active}><a><RiDashboardLine size={30} /> </a></ActiveLink>
           <ActiveLink href="/user/collaborator/create" activeClassName={styles.active}><a><AiFillMessage size={30} /> </a></ActiveLink>
           <ActiveLink href="/user/collaborator/create" activeClassName={styles.active}><a><GoGear size={30} /> </a></ActiveLink>

        </div>
        </>
    )
}


//CRIAR UM COMPONENTE DASHBOARD PARA ADM E COLABORADOR SEPARADO