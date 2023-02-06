import styles from './styles.module.scss'
import {BiTrash} from 'react-icons/bi'
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


export function DeleteCompanies(){
  const {theme} = useContext(ThemeContext)
  
    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}> 
        <h1>Selecione a Empresa : </h1>
          {empresas.map(empresas => (
            <>
            <nav className={styles.companiesList}>
          <div><ul>{empresas.nome} <button><BiTrash size={25} color="#fff" /></button></ul></div>
          </nav>
            </>
          ))
        }
          
         
        </div>
        </>
    )
}