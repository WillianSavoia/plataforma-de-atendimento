import styles from './styles.module.scss';

/* eslint-disable @next/next/no-img-element */

import { AdmCompanyHeader } from '../../../AdmCompanyComponents/AdmCompanyHeader';

import { useState } from 'react';

import { CollaboratorUserInfoModal } from '../../CollaboratorModals/userInfoModal';
import { CollaboratorMessages } from '../CollaboratorMessage';


interface ChatBoxProps{
  user: {
    id: number;
    name: string;
  };
}

export function CollaboratorClosedChatBox({user}: ChatBoxProps) {
 
  const [messages, setMessages] = useState([
    {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
         {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
         {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
        author: 1234,
        response: 'Ok, será encaminhado o mais rápido possível.'
       },
    {chatId: 2,
        name: 'Marcos Roberto Savoia',
        message: 'Como está o andamento dos processos?',
        author: 123,
        response: 'Está nos últimos detalhes!'
       },
       {chatId: 1,
        name: 'Willian Sanches Savoia',
        message: 'Olá! Preciso de um relatório de operação para os próximos 30 dias com urgência!',
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

   

    return(
        <>
        <AdmCompanyHeader />
        <div className={styles.container}>
           
             
      
           <div className={styles.chat}>

           <div className={styles.userHeader}>
                <CollaboratorUserInfoModal />

            </div>
           
               <div className={styles.messagesBox}>
               {messages.map((item, key) => (
             <CollaboratorMessages 
             key={key}
             data={item}
             user={user}
             />
             ))}
                </div>
               </div>
        </div>
        </>
    )
}
