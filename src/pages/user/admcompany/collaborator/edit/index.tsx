import { ThemeContext } from '../../../../../context/ThemeContext'
import { AdmCompanyHeader } from "../../../../../components/AdmCompanyComponents/AdmCompanyHeader";
import { AdmCompanyCollaboratorsMenu } from "../../../../../components/AdmCompanyComponents/admCollaboratorsMenu";
import { AdmCompanySideBar } from "../../../../../components/AdmCompanyComponents/AdmCompanySideBar";
import Head from 'next/head';
import styles from './styles.module.scss'

import {useContext} from 'react'
import { EditCollaborator } from '../../../../../components/AdmCompanyComponents/EditCollaborator';

export default function EditPage(){
    const {theme} = useContext(ThemeContext);

    return(
        <>
                <Head>
                    <title>Atendentes | Editar Atendente</title>
                </Head>
                <div className={`${styles.container} ${styles[theme]}`}>
                    <AdmCompanySideBar />
                    <AdmCompanyCollaboratorsMenu />
                    <AdmCompanyHeader />
                    <EditCollaborator />
                    
                </div>
            </>
    )
}