import { ThemeContext } from '../../../../../context/ThemeContext'
import { AdmCompanyHeader } from "../../../../../components/AdmCompanyHeader";
import { AdmCompanyCollaboratorsMenu } from "../../../../../components/admCollaboratorsMenu";
import { AdmCompanySideBar } from "../../../../../components/SideBar/admCompanysb";
import styles from './styles.module.scss'
import Head from 'next/head';

import {useContext} from 'react'
import { CreateNewCollaboratorForm } from '../../../../../components/CreateNewCollaborator';

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