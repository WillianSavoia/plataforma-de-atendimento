import { ThemeContext } from '../../../../../context/ThemeContext'
import { AdmCompanyHeader } from "../../../../../components/AdmCompanyComponents/AdmCompanyHeader";
import { AdmCompanyCollaboratorsMenu } from "../../../../../components/AdmCompanyComponents/admCollaboratorsMenu";
import { AdmCompanySideBar } from "../../../../../components/AdmCompanyComponents/AdmCompanySideBar";
import styles from './styles.module.scss'
import Head from 'next/head';

import {useContext} from 'react'
import { CreateNewCollaboratorForm } from '../../../../../components/AdmCompanyComponents/CreateNewCollaborator';

export default function CreatePage(){
    const {theme} = useContext(ThemeContext);

    return(
       <>
       
       <Head>
        <title>Atendentes | Cadastrar</title>
       </Head>

        <div className={`${styles.container} ${styles[theme]}`}>
            <AdmCompanySideBar />
            <AdmCompanyCollaboratorsMenu />
            <AdmCompanyHeader />
            <CreateNewCollaboratorForm />
            
        </div>

        </>
    )
}