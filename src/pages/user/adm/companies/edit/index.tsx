import { FormEvent } from "react";
import { CompanyList } from "../../../../../components/EditCompany";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'

export default function EditPage(){
    function handleSubmit(event: FormEvent){
      event.preventDefault();
    }
    return( 
        <>
       
        <div className={styles.container}>
        <AdmSideBar />
        <AdmOptions />
        <CompanyList />
        </div>
        </>
        )
}