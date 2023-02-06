import { DeleteCompanies } from "../../../../../components/DeleteCompany";
import { AdmOptions } from "../../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import styles from './styles.module.scss'
import { AdmHeader } from "../../../../../components/AdmHeader";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { useContext } from 'react'

export default function DeletePage(){

    const {theme} = useContext(ThemeContext)
   
    return( 
        <>
       
        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmHeader />
        <AdmSideBar />
        <AdmOptions />
        <DeleteCompanies />
        </div>
        </>
        )
}