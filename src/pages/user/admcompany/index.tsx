import { AdmCompanyHeader } from "../../../components/AdmCompanyComponents/AdmCompanyHeader"
import { AdmCompanySideBar } from "../../../components/AdmCompanyComponents/AdmCompanySideBar"
import { ThemeContext } from "../../../context/ThemeContext"

import {useContext} from 'react'

import Head from "next/head"

import styles from './styles.module.scss'

export default function AdmCompanyPage() {

    const {theme}  = useContext(ThemeContext)

    return(
        <>

           <Head>
            <title>Adm Company</title>
           </Head>

        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmCompanySideBar />
        <AdmCompanyHeader />
        </div>
        </>
    )
}