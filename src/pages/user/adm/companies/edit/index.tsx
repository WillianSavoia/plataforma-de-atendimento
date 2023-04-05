import { useContext } from "react";
import { CompanyList } from "../../../../../components/AdmComponents/EditCompany";
import { AdmOptions } from "../../../../../components/AdmComponents/CompaniesMenu";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

export default function EditPage(){
    const {theme} = useContext(ThemeContext)
    
    
    return( 
        <>

        <div className={`${styles.container} ${styles[theme]}`}>
           <Head>
            <title>Empresas | Editar</title>
           </Head>
       
            <AdmHeader />
            <AdmSideBar />
            <AdmOptions />
            <CompanyList />
        </div>
        </>
        )
}