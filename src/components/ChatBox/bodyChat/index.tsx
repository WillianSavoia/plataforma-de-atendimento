import { useState } from 'react';
import { Messages } from '../Messages';
import styles from './styles.module.scss';

interface BodyChatProps {
    user: {
        id: number;
        name: string;
    }
}

export function BodyChat ({user}: BodyChatProps) {

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
        ]);
    
    return (
        <div className={styles.messagesBox}>
              {messages.map((item, key) => (
                <Messages 
                key={key}
                data={item}
                user={user}
                />
                ))}

        </div>
    )
}