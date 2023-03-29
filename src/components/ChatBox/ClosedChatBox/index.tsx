import styles from './styles.module.scss';

/* eslint-disable @next/next/no-img-element */
import { ThemeContext } from '../../../context/ThemeContext';
import { AdmCompanyHeader } from '../../AdmCompanyHeader';
import { Messages } from '../Messages';

import { FormEvent, useContext, useState } from 'react';


import {IoPaperPlaneOutline} from 'react-icons/io5'
import {GrEmoji, GrClose} from 'react-icons/gr'
import {BsFillMicFill, BsPaperclip} from 'react-icons/bs'
import { useSpeechRecognition } from 'react-speech-recognition';
import EmojiPicker from 'emoji-picker-react';
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';
import { UserInfoModal } from '../../AdmCompanyModals/userInfoModal';
import { InsertImageModal } from '../../AdmCompanyModals/InsertImageModal';
import { InsertDocumentModal } from '../../AdmCompanyModals/InsertDocumentModal';
import { AdmUserHeader } from '../AdmUserHeader';

interface ChatBoxProps{
  user: {
    id: number;
    name: string;
  };
}

export function ClosedChatBox({user}: ChatBoxProps) {
 
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
                <UserInfoModal />

            </div>
           
               <div className={styles.messagesBox}>
               {messages.map((item, key) => (
             <Messages 
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
