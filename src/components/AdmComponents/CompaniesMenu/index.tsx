import { ActiveLink } from '../../ActiveLink'
import styles from './styles.module.scss'
import {FaUserMinus, FaUserEdit, FaBuilding} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { ThemeContext } from '../../../context/ThemeContext'
import {useContext} from 'react'



export function AdmOptions(){
   const {theme} = useContext(ThemeContext);

   

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
        <h1><div><FaBuilding size={20}/></div>EMPRESAS</h1>

           <div className={styles.content}> 
          
           <ActiveLink href="/user/adm/companies/create" activeClassName={styles.active}><a><div><BsFillPersonPlusFill size={20} /></div> Cadastrar empresa </a></ActiveLink>
           <ActiveLink href="/user/adm/companies/edit" activeClassName={styles.active}><a><div><FaUserEdit size={20} /></div> Editar empresa </a></ActiveLink>
           <ActiveLink href="/user/adm/companies/delete" activeClassName={styles.active}><a><div><FaUserMinus size={20} /></div> Excluir empresa </a></ActiveLink>
           
       
          
     
          
         
        </div>
        </div>

        <div className={`${styles.container2} ${styles[theme]}`}>
        <h1><div><FaBuilding size={20}/></div>EMPRESAS</h1>

           <div className={styles.content}> 
          
           <ActiveLink href="/user/adm/companies/create" activeClassName={styles.active}><a><div><BsFillPersonPlusFill size={20} /></div> Cadastrar empresa </a></ActiveLink>
           <ActiveLink href="/user/adm/companies/edit" activeClassName={styles.active}><a><div><FaUserEdit size={20} /></div> Editar empresa </a></ActiveLink>
           <ActiveLink href="/user/adm/companies/delete" activeClassName={styles.active}><a><div><FaUserMinus size={20} /></div> Excluir empresa </a></ActiveLink>
           
       
  
     
          
         
        </div>
        </div>
        </>
    )
}

