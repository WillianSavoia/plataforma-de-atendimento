import { ThemeContext } from "../../../../context/ThemeContext";
import styles from './styles.module.scss';

import Head from 'next/head'

import {useContext} from 'react'
import { CollaboratorSideBar } from "../../../../components/CollaboratorComponents/SideBar";

import { CollaboratorMessagesSideBar } from "../../../../components/CollaboratorComponents/CollaboratorMessagesSideBar";
import { CollaboratorBoxMessages } from "../../../../components/CollaboratorComponents/CollaboratorBoxMessages";


export default function ConversationPage () {

    const {theme} = useContext(ThemeContext)

    return (
        <>

            <Head>
                <title>Chat | Conversas Em Aberto</title>
            </Head>
            <div className={`${styles.container} ${styles[theme]}`}>
                <CollaboratorSideBar />

                <CollaboratorBoxMessages />
                <CollaboratorMessagesSideBar 
                chatId={undefined}
                />
            </div>
        
        
        </>
    )
}