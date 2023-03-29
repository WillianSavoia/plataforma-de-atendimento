import { AdmCompanyHeader } from "../../../../components/AdmCompanyHeader";

import { AdmCompanySideBar } from "../../../../components/SideBar/admCompanysb";
import { ThemeContext } from "../../../../context/ThemeContext";

import styles from './styles.module.scss'

import {useContext} from 'react'
import Head from "next/head";
import { AdmStatics } from "../../../../components/AdmStatistics";

export default function Dashboard(){

    const {theme} = useContext(ThemeContext)

    return(
        <>
           <Head>
            <title>Adm Company | Dashboard</title>
           </Head>
            <div className={`${styles.container} ${styles[theme]}`}>
                <AdmCompanySideBar />

                
                    <AdmCompanyHeader />
                    <AdmStatics />
                
        </div>
        </>
    )
}