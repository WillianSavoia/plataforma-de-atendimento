import { DeleteCompanies } from "../../../../../components/AdmComponents/DeleteCompany";
import { AdmOptions } from "../../../../../components/AdmComponents/CompaniesMenu";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
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