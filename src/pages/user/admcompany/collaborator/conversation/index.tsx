import { ThemeContext } from '../../../../../context/ThemeContext'
import styles from './styles.module.scss'

import {useContext} from 'react';

import { AdmCompanySideBar } from '../../../../../components/SideBar/admCompanysb';
import { AdmBoxMessages } from '../../../../../components/AdmBoxMessages';
import { UserMessagesSideBar } from '../../../../../components/UserMessagesSideBar';


export default function ConversationPage(){
    const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
            <AdmCompanySideBar />
            <AdmBoxMessages />
            <UserMessagesSideBar />
        </div>
        </>
    )
}