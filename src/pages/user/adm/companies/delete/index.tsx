import { DeleteCompanies } from "../../../../../components/DeleteCompany";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmHeader";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { useContext } from 'react'

import Head from "next/head";

export default function DeletePage(){

    const {theme} = useContext(ThemeContext)
   
    return( 
        <>

           <Head>
            <title>Empresas | Deletar</title>
           </Head>
       
        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmHeader />
        <AdmSideBar />
        <AdmOptions />
        <DeleteCompanies />
        </div>
        </>
        )
}