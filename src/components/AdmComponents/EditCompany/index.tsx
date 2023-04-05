import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import { useDropDownMenu } from '../../../hooks/useDropDownMenu';
import styles from './styles.module.scss'
import { EditCompanyModal } from '../AdmModals/EditCompanyModal';

const Empresas = [
    {
        nome: 'Empresa 1',
        email: 'empresa1@empresa.com.br',
        cnpj: '00.000.000/0000-11',
        rs: 'Emp 1',
        end: 'rua primeiro',
        num: '1',
        id: 1
    },
    {
        nome: 'Empresa2',
        email: 'empresa2@empresa.com.br',
        cnpj: '00.000.000/0000-22',
        rs: 'Emp 2',
        end: 'rua segundo',
        num: '2',
        id: 2
    },
    {
        nome: 'Empresa3',
        email: 'empresa3@empresa.com.br',
        cnpj: '00.000.000/0000-33',
        rs: 'Emp 3',
        end: 'rua terceiro',
        num: '3',
        id: 3
    },
    {
        nome: 'Empresa4',
        email: 'empresa4@empresa.com.br',
        cnpj: '00.000.000/0000-44',
        rs: 'Emp 4',
        end: 'rua quarto',
        num: '4',
        id: 4
    },
    {
        nome: 'Empresa5',
        email: 'empresa5@empresa.com.br',
        cnpj: '00.000.000/0000-55',
        rs: 'Emp 5',
        end: 'rua quint',
        num: '5',
        id: 5
    },
    {
        nome: 'Empresa6',
        email: 'empresa6@empresa.com.br',
        cnpj: '00.000.000/0000-66',
        rs: 'Emp 6',
        end: 'rua sexto',
        num: '6',
        id: 6
    },
    {
        nome: 'Empresa7',
        email: 'empresa7@empresa.com.br',
        cnpj: '00.000.000/0000-77',
        rs: 'Emp 7',
        end: 'rua sétimo',
        num: '7',
        id: 7
    },
    {
        nome: 'Empresa8',
        email: 'empresa8@empresa.com.br',
        cnpj: '00.000.000/0000-88',
        rs: 'Emp 8',
        end: 'rua oitavo',
        num: '8',
        id: 8
    },
    {
        nome: 'Empresa9',
        email: 'empresa9@empresa.com.br',
        cnpj: '00.000.000/0000-99',
        rs: 'Emp 9',
        end: 'rua nono',
        num: '9',
        id: 9
    },
    {
        nome: 'Empresa10',
        email: 'empresa10@empresa.com.br',
        cnpj: '00.000.000/0000-10',
        rs: 'Emp 10',
        end: 'rua décimo',
        num: '10',
        id: 10
    },
]


export function CompanyList (){

   const {theme} = useContext(ThemeContext);

   const [open, setOpen] = useState(false)


    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
         <h1>Empresas</h1>
          <nav className={styles.companyList}>
            {Empresas.map((item, key) => (
              <EditCompanyModal
              key={key}
              data={item}
              />
                

            ))}
            
         
            
          </nav>
        </div>
        </>
    )
}

