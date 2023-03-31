import { ThemeContext } from '../../../../../context/ThemeContext'
import { AdmCompanyHeader } from "../../../../../components/AdmCompanyComponents/AdmCompanyHeader";
import { AdmCompanyCollaboratorsMenu } from "../../../../../components/AdmCompanyComponents/admCollaboratorsMenu";
import { AdmCompanySideBar } from "../../../../../components/AdmCompanyComponents/AdmCompanySideBar";
import styles from './styles.module.scss'

import {useContext} from 'react'
import { DeleteCollaborator } from '../../../../../components/AdmCompanyComponents/DeleteCollaborators';
import Head from 'next/head';

export default function DeletePage(){
    const {theme} = useContext(ThemeContext);

    return(

        <>
            <Head>
                <title>Chat | Excluir atendente</title>
            </Head>
            <div className={`${styles.container} ${styles[theme]}`}>
                <AdmCompanySideBar />
                <AdmCompanyCollaboratorsMenu />
                <AdmCompanyHeader />
                <DeleteCollaborator />
                
            </div>
        </>
    )
}