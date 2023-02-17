import { ActiveLink } from '../ActiveLink'
import styles from './admCompany.module.scss'
import {BsBarChartLineFill} from 'react-icons/bs'

import { useContext } from 'react'

import { RiDashboardLine } from 'react-icons/ri'
import { ThemeContext } from '../../context/ThemeContext'




export function AdmCompanyMenuOptions(){
   const {theme} = useContext(ThemeContext)

    return (
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
        <h1><div><RiDashboardLine size={30}/></div>DASHBOARD</h1>

            
            <ActiveLink href="/user/admcompany/dashboard" activeClassName={styles.active}><a><div><BsBarChartLineFill size={20} /></div>Estatísitcas</a></ActiveLink>
           
        </div>
        </>
    )
}