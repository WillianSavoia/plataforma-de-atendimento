import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/AdmComponents/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import { ThemeContext } from "../../../../../context/ThemeContext";
import {useContext} from 'react'

import Head from "next/head";

import styles from './styles.module.scss'

export default function TemplatesConfig() {
   const {theme} = useContext(ThemeContext)

    return (
        <>

           <Head>
            <title>Config | Templates</title>
           </Head>

            <AdmSideBar />
            <AdmOptionsMenu />
            <AdmHeader />
            <div className={`${styles.container} ${styles[theme]}`}>
                <h1>Configurar Templates</h1>
            </div>
        </>
    )
}