import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { FaUserEdit, FaUserMinus } from 'react-icons/fa'

import { useContext } from 'react'

import { HiUserGroup } from 'react-icons/hi'
import { ThemeContext } from '../../context/ThemeContext'




export function AdmCompanyCollaboratorsMenu(){
   const {theme} = useContext(ThemeContext)

    return (
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
        <h1><div><HiUserGroup size={30}/></div>Atendentes</h1>

            
            <ActiveLink href="/user/admcompany/collaborator/create" activeClassName={styles.active}><a><div><BsFillPersonPlusFill size={20} /></div>Novo Atendente</a></ActiveLink>
            <ActiveLink href="/user/admcompany/collaborator/edit" activeClassName={styles.active}><a><div><FaUserEdit size={20} /></div>Editar Atendente</a></ActiveLink>
            <ActiveLink href="/user/admcompany/collaborator/delete" activeClassName={styles.active}><a><div><FaUserMinus size={20} /></div>Excluir Atendente</a></ActiveLink>
           
        </div>
        </>
    )
}