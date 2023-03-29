import Head from 'next/head';
import { useContext } from 'react';
import { AdmBoxMessages } from '../../../../../../components/AdmBoxMessages';
import { AdmCompanySideBar } from '../../../../../../components/SideBar/admCompanysb';
import { ClosedChatBoxMessages } from '../../../../../../components/UserMessagesSideBar/ClosedChatBoxMessages';
import { ThemeContext } from '../../../../../../context/ThemeContext';
import styles from './styles.module.scss';

export default function ClosedChatPage () {

    const {theme} = useContext(ThemeContext);

    return(
        <>

            <Head>
                <title>Chat | Conversas Encerradas</title>
            </Head>
            <div className={`${styles.container} ${styles[theme]}`}>
                <AdmCompanySideBar />
                <AdmBoxMessages />
                <ClosedChatBoxMessages chatId={undefined}/>
            </div>
        </>
    )
}