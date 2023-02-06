
import { IncludeCompanyForm } from "../../../../../components/includeCompanyForm";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmHeader";
import { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";

export default function CompaniesPage(){
    const {theme} = useContext(ThemeContext)

    return( 
        <>
       
        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmHeader />
        <AdmSideBar />
        <AdmOptions />
        <IncludeCompanyForm />
        
        
          
        </div>
        </>
        )
}



/* <div className={styles.content}>
            <span>Atenção:Após o envio dos dados, será enviado um E-mail para a confirmação dos dados.</span>
           </div>*/