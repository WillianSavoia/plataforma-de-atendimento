import { useContext } from "react";
import { CompanyList } from "../../../../../components/EditCompany";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmHeader";
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