/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

import { FiUserPlus } from 'react-icons/fi';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import {useState, useContext} from 'react';
import Modal from 'react-modal';

import { ThemeContext } from '../../../context/ThemeContext';
import { AiOutlineClose } from 'react-icons/ai';




export function NewConversationModal () {
    const [IsOpen, setIsOpen] = useState(false);

   

    const [search, setSearch] = useState('');

    const [contacts, setContacts] = useState([
        {chatId: 1,
            name: 'Willian Sanches Savoia',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Desenvolvedor'
           
           },
        {chatId: 2,
            name: 'Marcos Roberto Savoia',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Atendente'
           
           },
        {chatId:3,
            name: 'Cássia Veiga Candido',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Atendente'
     
            },
        {chatId: 4,
           name: 'Luciana Cristina ',
           avatar: 'https://github.com/WillianSavoia.png',
           cargo: 'Atendente'
         
        },
        {chatId: 5, 
            name: 'Marcos Henrique Sanches',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Supervisor'
        },
        ]);
    
    const LowerSearch = search.toLowerCase();

    const Filter = contacts.filter((contact) => contact.name.toLowerCase().includes(LowerSearch));

    const {theme} = useContext(ThemeContext);

    return(
        <>
           
           <div className={styles.container}>
                <button className={`${styles.btn} ${styles[theme]}`} onClick={() =>setIsOpen(true)}><FiUserPlus size={25}/></button>
           </div>

           <Modal
           isOpen={IsOpen}
           onRequestClose={() => (setIsOpen(false))}
           contentLabel="New Conversation"
           ariaHideApp={false}
           className={`${styles.Modal} ${styles[theme]}`}
           >
            
                <div className={styles.ModalHeader}>
                    <h2>Iniciar uma nova conversa </h2>
                    <AiOutlineClose onClick={() => setIsOpen(false)} className={styles.svg} size={25}/>
                </div>
                <div className={styles.inputArea}>
                    <input type="text"
                    placeholder='Pesquisar Contato'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                    <div><HiOutlineMagnifyingGlass size={20} className={styles.svg2}/></div>
                </div>
                    {Filter.map((data, key) =>(
                        <div className={styles.ContactsContainer} key={key}>
                          
                        
                               <div className={styles.contact} onClick={() => setIsOpen(false)}>
                                    <div>
                                        <img  className={styles.avatar} src={data.avatar} />
                                    </div>
                                    <div className={styles.name}>
                                        <span className={styles.Name}>{data.name}</span>
                                        <span className={styles.cargo}>{data.cargo}</span>
                                    </div>
                       
                               </div>
                        </div>
                    ))}
           
           </Modal>
          
        </>
    )
}