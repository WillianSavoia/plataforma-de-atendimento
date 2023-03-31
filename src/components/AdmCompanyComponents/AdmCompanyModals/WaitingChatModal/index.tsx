/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

import { FaUserClock } from 'react-icons/fa'
import { useState, useContext } from 'react';
import Modal from 'react-modal';

import { ThemeContext } from '../../../context/ThemeContext';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai';
import Link from 'next/link';
import { FiXCircle } from 'react-icons/fi';


export function WaitingChatModal () {
    const [isOpen, setIsOpen] = useState(false);

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
        {chatId: 6, 
            name: 'Larissa Souza',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Atendente'
        },{chatId: 7, 
            name: 'Débora Nunes',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Atendente'
        },{chatId: 8, 
            name: 'Marcos Roberto Savoia',
            avatar: 'https://github.com/WillianSavoia.png',
            cargo: 'Supervisor'
        }
        ]);

    const [search, setSearch] = useState('');

    const LowerSearch = search.toLowerCase();

    const Filter = contacts.filter((contact) => contact.name.toLowerCase().includes(LowerSearch));

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <FaUserClock size={25} className={styles.WaitingChats} onClick={() => setIsOpen(true)}/>

            <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="WaitingChat"
            ariaHideApp={false}
            className={`${styles.Modal} ${styles[theme]}`}
            >
                <div className={styles.Header}>
                    <h1>Conversas em Espera</h1>
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
                                    <div className={styles.icons}>
                                        <FiXCircle className={styles.exclude} size={20} />
                                        <Link className={styles.checked} href="/user/admcompany/collaborator/conversation">
                                            <AiOutlineCheckCircle  size={20} onClick={() => setIsOpen(false)}/>
                                        </Link>
                                    </div>
                       
                               </div>
                        </div>
                    ))}
            </Modal>
        </>
    )
}