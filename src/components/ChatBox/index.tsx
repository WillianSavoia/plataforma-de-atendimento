/* eslint-disable @next/next/no-img-element */
import { FormEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AdmCompanyHeader } from '../AdmCompanyHeader';
import styles from './styles.module.scss';
import {IoPaperPlaneOutline} from 'react-icons/io5'
import { Messages } from './Messages';

interface ChatBoxProps{
  user: {
    id: number;
    name: string;
  };
}

export function ChatBox({user}: ChatBoxProps) {

  const [messages, setMessages] = useState([
    {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
 
    ]);

    const [sendMessages, setSendMessages] = useState('');


    const {theme} = useContext(ThemeContext);

    function HandleSubmit(event: FormEvent) {
       event.preventDefault();
      };
      
      

    return(
        <>
        <AdmCompanyHeader />
        <div className={styles.container}>
           
             
      
           <div className={styles.chat}>
             <div className={styles.userHeader}>
              <div className={styles.info}>
              <div className={styles.picture}>
                 <img src="https://github.com/WillianSavoia.png" alt="Avatar" className={styles.avatar} />
               </div>
                 
                 <h2>{user.name}</h2>
              </div>
                <span>Toque aqui para editar ou ver mais</span>
             </div>
               {messages.map((item, key) => (
             <Messages 
             key={key}
             data={item}
             user={user}
             />
                 ))}
             <form
             onSubmit={HandleSubmit}
             className={styles.inputTextArea}>
              <div className={styles.input}>
                <input type="text" 
                placeholder='Escreva uma mensagem'
                value={sendMessages}
                onChange={(ev) => setSendMessages(ev.target.value)}
                />
              </div>
                <div className={styles.button}><button 
                className={`${styles.sendMessage} ${styles[theme]}`}
                type='submit'
                ><IoPaperPlaneOutline size={25}/></button></div>
                </form>
             
             
           </div>
        </div>
        </>
    )
}


