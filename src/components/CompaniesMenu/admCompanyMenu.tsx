import { ActiveLink } from '../ActiveLink'
import styles from './admCompany.module.scss'
import {BsBarChartLineFill} from 'react-icons/bs'

import { RiDashboardLine } from 'react-icons/ri'




export function AdmCompanyMenuOptions(){
    return (
        <>
        <div className={styles.container}>
        <h1><div><RiDashboardLine size={30}/></div>EMPRESAS</h1>

            
            <ActiveLink href="/user/admcompany/dashboard" activeClassName={styles.active}><a><div><BsBarChartLineFill size={20} /></div>Estatísitcas</a></ActiveLink>
           
        </div>
        </>
    )
}