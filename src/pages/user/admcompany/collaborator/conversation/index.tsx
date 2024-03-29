import { ThemeContext } from '../../../../../context/ThemeContext'
import styles from './styles.module.scss'

import {useContext} from 'react';

import { AdmCompanySideBar } from '../../../../../components/AdmCompanyComponents/AdmCompanySideBar';
import { AdmBoxMessages } from '../../../../../components/AdmCompanyComponents/AdmBoxMessages';
import { UserMessagesSideBar } from '../../../../../components/AdmCompanyComponents/UserMessagesSideBar';
import Head from 'next/head';


export default function ConversationPage(){
    const {theme} = useContext(ThemeContext)

    return(
        <>
          <Head>
            <title>Chat | Conversas em aberto</title>
           </Head>
        
        
        <div className={`${styles.container} ${styles[theme]}`}>
            <AdmCompanySideBar />
            <AdmBoxMessages />
            <UserMessagesSideBar chatId={undefined} />
        </div>
        </>
    )
}