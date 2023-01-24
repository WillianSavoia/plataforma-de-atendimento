import { ActiveLink } from '../ActiveLink'
import styles from './admCompany.module.scss'
import {MdPersonAddAlt1} from 'react-icons/md'
import {BsFillPeopleFill} from 'react-icons/bs'
import {RiLockPasswordLine, RiDashboardLine} from 'react-icons/ri'
import {FaUserMinus, FaUserEdit, FaChartBar} from 'react-icons/fa'
import { GoGear } from 'react-icons/go'
import {HiUserGroup} from 'react-icons/hi'


export function AdmCompanySideBar(){
    return(
        <>
        <div className={styles.container}>
           <h1>logo</h1>

        
           <ActiveLink href="/user/admcompany/dashboard" activeClassName={styles.active}><a><RiDashboardLine size={30}/></a></ActiveLink>
           <ActiveLink href="/user/admcompany/addcollaborator" activeClassName={styles.active}><a><HiUserGroup size={30}/> </a></ActiveLink>
           <ActiveLink href="/user/admcompany/change-password" activeClassName={styles.active}><a><RiLockPasswordLine size={30}/></a></ActiveLink>
         
       
        </div>
        </>
    )
}

<RiDashboardLine size={20}/>