
import { IncludeCompanyForm } from "../../../../../components/AdmComponents/includeCompanyForm";
import { AdmOptions } from "../../../../../components/AdmComponents/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

export default function CompaniesPage(){
    const {theme} = useContext(ThemeContext)

    return( 
        <>

           <Head>
            <title>Empresas | Cadastrar</title>
           </Head>
       
        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmHeader />
        <AdmSideBar />
        <AdmOptions />
        <IncludeCompanyForm />
        
        
          
        </div>
        </>
        )
}



/* <div className={styles.content}>
            <span>Atenção:Após o envio dos dados, será enviado um E-mail para a confirmação dos dados.</span>
           </div>*/