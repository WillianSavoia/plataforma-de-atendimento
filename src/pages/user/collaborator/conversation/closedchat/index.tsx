import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { CollaboratorSideBar } from "../../../../../components/CollaboratorComponents/SideBar";
import { CollaboratorBoxMessages } from "../../../../../components/CollaboratorComponents/CollaboratorBoxMessages";
import { CollaboratorClosedChatBoxMessages } from "../../../../../components/CollaboratorComponents/CollaboratorMessagesSideBar/CollabClosedChatBox";

import styles from './styles.module.scss'

export default function ClosedChatPage () {

    const {theme} = useContext(ThemeContext);

    return(
        <>

            <Head>
                <title>Chat | Conversas Encerradas</title>
            </Head>
            <div className={`${styles.container} ${styles[theme]}`}>
                <CollaboratorSideBar />
                <CollaboratorBoxMessages />
                <CollaboratorClosedChatBoxMessages chatId={undefined}/>
            </div>
        </>
    )
}