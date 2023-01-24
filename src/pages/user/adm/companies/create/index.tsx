
import { IncludeCompanyForm } from "../../../../../components/includeCompanyForm";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'

export default function CompaniesPage(){

    return( 
        <>
       
        <div className={styles.container}>
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