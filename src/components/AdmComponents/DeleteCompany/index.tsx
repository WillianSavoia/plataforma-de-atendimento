import styles from './styles.module.scss'
import { ThemeContext } from '../../../context/ThemeContext'
import {useContext} from 'react'
import { ExcludeCompanyModal } from '../AdmModals/ExcludeCompanyModal'

const empresas = [
    {nome: "Empresa 1",
  id: 1},
    {nome: "Empresa 2",
  id: 2},
    {nome: "Empresa 3",
  id: 3},
    {nome: "Empresa 4",
  id: 4},
    {nome: "Empresa 5",
  id: 5},
    {nome: "Empresa 6",
  id: 6},
    {nome: "Empresa 7",
  id: 7},
    {nome: "Empresa 8",
  id: 8},
    {nome: "Empresa 9",
  id: 9},
]


export function DeleteCompanies(){
  const {theme} = useContext(ThemeContext)
  
    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}> 
          <h1>Selecione a Empresa : </h1>
          {empresas.map((empresas) => (
            <>
                <nav  className={styles.companiesList}>
                  <div key={empresas.id}><ul>{empresas.nome}</ul> <ExcludeCompanyModal /></div>
              </nav>
            </>
          ))
        }
          
         
        </div>
        </>
    )
}