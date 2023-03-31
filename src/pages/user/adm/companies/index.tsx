import { AdmHeader } from "../../../../components/AdmComponents/AdmHeader";
import { AdmOptions } from "../../../../components/AdmComponents/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../components/AdmComponents/AdmSideBar";

import styles from './styles.module.scss'

export default function CompaniesPage () {
    return(
        <>
        
         <AdmSideBar />
        <AdmOptions />
        <AdmHeader />
        </>
    )
}