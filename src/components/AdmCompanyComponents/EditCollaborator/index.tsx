import styles from './styles.module.scss';

import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { EditCollaboratorModal } from '../../AdmCompanyModals/EditCollabModal';




const Activity = [
    {
      id: "1",
      name: "Willian Veiga Sanches Savoia",
      office: "Atendente",
      conversations: "20 conversas ",
      waiting: "5 conversas "
    },
    {
      id: "2",
       name: "Marcos Vinícius Silva",
       office: "Atendente",
       conversations: "10 conversas",
       waiting: "5 conversas "
     },
     {
       id: "3",
       name: "Maria Aparecida Leite",
       office: "Atendente",
       conversations: "12 conversas",
       waiting: "5 conversas "
     },
     {
       id: "4",
       name: "Bruno Nascimento Souza",
       office: "Atendente",
       conversations: "19 conversas",
       waiting: "5 conversas"
     },
     {
       id: "5",
       name: "Jorge Amado ",
       office: "Atendente",
       conversations: "18 conversas ",
       waiting: "5 conversas "
     },
     {
       id: "6",
       name: "Cátia Vieira",
       office: "Atendente",
       conversations: "7 conversas ",
       waiting: "5 conversas "
     },
 ]


 
export function EditCollaborator() {
    const {theme} = useContext(ThemeContext)

    return(
        <div className={styles.container }>
            <h1>Editar Colaborador</h1>
        {Activity.map(Activity =>
          
            <ul key={Activity.id} 
            className={`${styles.ul}  ${styles[theme]}`}>
              <li>
                <h2  className={styles.Name} >Funcionário: {Activity.name}</h2>
                <span>Cargo: {Activity.office}</span>
                <span>Conversas encerradas: {Activity.conversations}</span>
                <span>Conversas em espera: {Activity.waiting}</span>
              </li>
              <div><EditCollaboratorModal /></div>
            </ul>
          
          )}
       </div>
    )
}