import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/AdmComponents/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import { ThemeContext } from "../../../../../context/ThemeContext";
import {useContext} from 'react'

import Head from "next/head";

import styles from './styles.module.scss'
import { AdmOptionsResponsiveMenu } from "../../../../../components/AdmComponents/OptionsMenu/OptionsResponsiveMenu";

export default function TemplatesConfig() {
   const {theme} = useContext(ThemeContext)

    return (
        <>

        <div className={`${styles.container} ${styles[theme]}`}>
           <Head>
            <title>Config | Templates</title>
           </Head>

            <AdmSideBar />
            <AdmOptionsMenu />
            <AdmHeader />
            <AdmOptionsResponsiveMenu />
                <h1 className={styles.title}>Configurar Templates</h1>
        </div>
        </>
    )
}