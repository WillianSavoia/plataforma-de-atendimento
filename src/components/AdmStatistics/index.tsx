import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from './styles.module.scss'

import {FiEdit2} from 'react-icons/fi'

import Link from 'next/link';

const numbers= [
  {
    conversas_totais: "8 conversas",
    conversas_encerradas: "20 conversas",
    atendentes_totais: "30  ativos",
    expiração_de_assinatura: "06/02/2024",
  }
]

const Activity = [
   {
     name: "Willian Veiga Sanches Savoia",
     office: "Atendente",
     conversations: "20 conversas ",
     waiting: "5 conversas "
   },
   {
      name: "Marcos Vinícius Silva",
      office: "Atendente",
      conversations: "10 conversas",
      waiting: "5 conversas "
    },
    {
      name: "Maria Aparecida Leite",
      office: "Atendente",
      conversations: "12 conversas",
      waiting: "5 conversas "
    },
    {
      name: "Bruno Nascimento Souza",
      office: "Atendente",
      conversations: "19 conversas",
      waiting: "5 conversas"
    },
    {
      name: "Jorge Amado ",
      office: "Atendente",
      conversations: "18 conversas ",
      waiting: "5 conversas "
    },
    {
      name: "Cátia Vieira",
      office: "Atendente",
      conversations: "7 conversas ",
      waiting: "5 conversas "
    },
]

export function AdmStatics () {
    
    const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={styles.container}>
            <h1> Estatísticas</h1>
            <div className={styles.content}>
             {
                numbers.map(numbers => (
                        <div  className={styles.statistics} key={numbers.expiração_de_assinatura}>
                        <div  className={`${styles.total} ${styles[theme]}`}>
                    <h2>Conversas Totais: </h2>
                    <span>{numbers.conversas_totais}</span>
                    <p>Atualizado há 1 segundo </p>
                  </div><div className={`${styles.ended} ${styles[theme]}`}>
                      <h2>Encerradas: </h2>
                      <span>{numbers.conversas_encerradas}</span>
                      <p>Atualizado há 1 segundo </p>
                    </div><div className={`${styles.collaborators} ${styles[theme]}`}>
                      <h2>Atendentes: </h2>
                      <span>{numbers.atendentes_totais}</span>
                      <p>Atualizado há 1 segundo </p>
                    </div><div className={`${styles.signature} ${styles[theme]}`}>
                      <h2>expiração:</h2>
                      <span>{numbers.expiração_de_assinatura}</span>
                      <p>Atualizado há 1 segundo </p>
                    </div>
                    </div>

                ))
             }
               
            </div>
            
            <div className={styles.collaborators }>
              {Activity.map(Activity =>
                  <ul key={Activity.name} className={`${styles.ul} ${styles[theme]}`}>
                    <li>
                      <Link href="#" className={styles.link}>Funcionário:{Activity.name}</Link>
                      <span>Cargo: {Activity.office}</span>
                      <span>Conversas encerradas: {Activity.conversations}</span>
                      <span>Conversas em espera: {Activity.waiting}</span>
                    </li>
                    <div><Link  className={styles.edit} href="collaborator/edit"><FiEdit2 size={20} /></Link></div>
                  </ul>

                )}
             </div>

        </div>
        </> 
    )
}