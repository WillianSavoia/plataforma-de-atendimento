import { DeleteCompanies } from "../../../../../components/DeleteCompany";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'

export default function DeletePage(){
   
    return( 
        <>
       
        <div className={styles.container}>
        <AdmSideBar />
        <AdmOptions />
        <DeleteCompanies />
        </div>
        </>
        )
}