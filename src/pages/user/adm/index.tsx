import { AdmSideBar } from "../../../components/AdmComponents/AdmSideBar";
import { AdmHeader } from "../../../components/AdmComponents/AdmHeader";

import styles from './styles.module.scss'
import { Overwiewl } from "../../../components/AdmComponents/OverwiewAdm";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import Head from "next/head";
import { AdmSideBarResponsive } from "../../../components/AdmComponents/AdmSideBar/AdmSideBarResponsive";

export default function AdmPage(){
   const {theme} = useContext(ThemeContext)

    return(
        <>

           <Head>
            <title>Adm</title>
           </Head>
        
        <div className={`${styles.container} ${styles[theme]}` }>
        <AdmSideBarResponsive />
        <AdmHeader />
        <Overwiewl />
        </div>
    
        </>
    )
}