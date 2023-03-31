import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { ActiveLink } from '../../ActiveLink'
import styles from './styles.module.scss'
import {HiOutlineMagnifyingGlass} from 'react-icons/hi2'
import { SwitchInput } from '../../SwitchMode'



const Members = [
    "Willian Veiga",
    "Marcos Vinícius",
    "Victória Maria",
    "Lucas Souza",
    "Carlos Vieira",
    "Diego Souza",
    "Bruno Macedo",
    "Marta Souza",
    "Marcia dos Santos",
    "Renata Batista",

]

export function CollaboratorBoxMessages () {
   const {theme} = useContext(ThemeContext);

   const [search, setSearch] = useState('');
   
   const LowerSearch = search.toLowerCase();

  const Filter =  Members.filter((member) => member.toLowerCase().includes(LowerSearch));

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
            <span>Caixa de entrada</span>
            <div className={styles.division1}>
            <ActiveLink href="/user/collaborator/conversation" activeClassName={styles.active}><a>Conversa em Aberto</a></ActiveLink>
            <ActiveLink href="/user/collaborator/conversation/closedchat" activeClassName={styles.active}><a>Conversas Encerradas</a></ActiveLink>
            </div>
            <div className={styles.input}>
                <input type="text"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                placeholder="Pesquisar Membro"/>
                    <HiOutlineMagnifyingGlass size={20} className={styles.svg}/>
                </div>
                <div className={styles.members}>
                    {Filter.map(Members => (
                        <div className={styles.division2} key={Members}>

                            <ul>
                                <li>{Members}</li>
                            </ul>
                        </div>
                    ))}
                </div>
        </div>
       
        </>
    )
}

