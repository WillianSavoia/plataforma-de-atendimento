import { ActiveLink } from '../ActiveLink'
import styles from './admMenu.module.scss'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FaUserMinus, FaUserEdit, FaWhatsapp, FaBuilding} from 'react-icons/fa'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContext'
import {useContext} from 'react'

const empresas = [
    {nome: "Empresa 1"},
    {nome: "Empresa 2"},
    {nome: "Empresa 3"},
    {nome: "Empresa 4"},
    {nome: "Empresa 5"},
    {nome: "Empresa 6"},
    {nome: "Empresa 7"},
    {nome: "Empresa 8"},
    {nome: "Empresa 9"},
]

export function AdmOptions(){
   const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
        <h1><div><FaBuilding size={20}/></div>EMPRESAS</h1>

           <div className={styles.content}> 
          
           <ActiveLink href="/user/adm/companies/create" activeClassName={styles.active}><a><div><BsFillPersonPlusFill size={20} /></div> Cadastrar empresa </a></ActiveLink>
           <ActiveLink href="/user/adm/companies/edit" activeClassName={styles.active}><a><div><FaUserEdit size={20} /></div> Editar empresa </a></ActiveLink>
           <ActiveLink href="/user/adm/companies/delete" activeClassName={styles.active}><a><div><FaUserMinus size={20} /></div> Excluir empresa </a></ActiveLink>
           
       
           <span>EMPRESAS CADASTRADAS</span>

           <ul>
            {empresas.map(empresas => (
                <>
                <li>{empresas.nome}</li>
                </>
            ))}
           </ul>
     
          
         
        </div>
        </div>
        </>
    )
}

