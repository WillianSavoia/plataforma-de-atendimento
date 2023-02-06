import { AdmSideBar } from "../../../components/SideBar/admSidebar";
import { AdmHeader } from "../../../components/AdmHeader";

import styles from './styles.module.scss'
import { Overwiewl } from "../../../components/OverwiewAdm";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export default function AdmPage(){
   const {theme} = useContext(ThemeContext)

    return(
        <>
        
        <div className={`${styles.container} ${styles[theme]}` }>
        <AdmSideBar />
        <AdmHeader />
        <Overwiewl />
        </div>
    
        </>
    )
}