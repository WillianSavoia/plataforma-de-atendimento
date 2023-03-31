import { useContext } from "react";
import { CompanyList } from "../../../../../components/AdmComponents/EditCompany";
import { AdmOptions } from "../../../../../components/AdmComponents/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

export default function EditPage(){
    const {theme} = useContext(ThemeContext)
    
    
    return( 
        <>

           <Head>
            <title>Empresas | Editar</title>
           </Head>
       
        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmHeader />
        <AdmSideBar />
        <AdmOptions />
        <CompanyList />
        </div>
        </>
        )
}