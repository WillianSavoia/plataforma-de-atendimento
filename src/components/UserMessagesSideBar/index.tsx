import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import styles from './styles.module.scss'

import {useContext, useState} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { MessagesList } from './MessagesList';
import { ChatBox } from '../ChatBox';
import { InactiveChat } from '../ChatBox/InactiveChat';
import { NewConversationModal } from '../AdmCompanyModals/newConversationModal';


interface UserMessagesSideBarProps{
    chatId: number | undefined;
    
   
}



export function UserMessagesSideBar({chatId}: UserMessagesSideBarProps){

    const [messages, setMessages] = useState([
    {chatId: 1,
        name: 'Willian Sanches Savoia',
        author: '1234',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência',
        avatar: 'https://github.com/WillianSavoia.png'
       
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        author: '123',
        message: 'Como está o andamento dos processos?',
        avatar: 'https://github.com/WillianSavoia.png'
       
       },
    {chatId:3,
        name: 'Cássia Veiga Candido',
        author: '123',
        message: 'Alguma novidade sobre as empresas?',
        avatar: 'https://github.com/WillianSavoia.png'
 
        },
    {chatId: 4,
       name: 'Luciana Cristina ',
       author: '123',
       message: 'Boa tarde! gostaria de saber novidades sobre meu processo',
       avatar: 'https://github.com/WillianSavoia.png'
     
    },
    {chatId: 5, 
        name: 'Marcos Henrique Sanches',
        author: '123',
        message: 'Estou esperando a entrega do produto para o mais rápido possível',
        avatar: 'https://github.com/WillianSavoia.png'
    }
    ]);
        
    const [activeChat, setActiveChat] = useState({chatId});

    const [search, setSearch] = useState('');

    const [user, setUser] = useState({
        id: 1234,
        name: 'Willian Sanches Savoia   '
    });

    const LowerSearch = search.toLowerCase();

    const Filter = messages.filter((messages) => messages.name.toLowerCase().includes(LowerSearch));
  
    const {theme} = useContext(ThemeContext);


    return(
        
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.content}>
                <h1>Conversas em Aberto</h1>
               <div className={styles.inputArea}>
               <div className={styles.input}>
                    <input type="text" 
                    placeholder='Pesquisar uma conversa'
                    value={search}
                    onChange={(ev) =>setSearch(ev.target.value)}
                    
                    />
                    <HiOutlineMagnifyingGlass size={20} className={styles.svg}/>
                    
                </div>
                <NewConversationModal />
               </div>
                <div className={styles.messages}>
                   {Filter.map((item, key) =>(
                    <MessagesList 
                    key={key}
                    data={item}
                    active={activeChat.chatId === messages[key].chatId}
                    onClick={() =>setActiveChat(messages[key])}
                    />
                   ))}
                </div>
            </div>
        </div>
        
        <div className={styles.chat}>




                {  activeChat.chatId !== undefined &&
                    <ChatBox
                    user={user}
                    />
                    
                }
      

            { activeChat.chatId === undefined &&
                <InactiveChat />
            }    
        </div>
        
       
        </>
    )
}

