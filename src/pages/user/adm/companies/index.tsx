import { AdmOptions } from "../../../../components/CompaniesMenu/admMenuOptions";
import { AdmSideBar } from "../../../../components/SideBar/admSidebar";

import styles from './styles.module.scss'

export default function CompaniesPage () {
    return(
        <>
         <AdmSideBar />
        <AdmOptions />
        </>
    )
}