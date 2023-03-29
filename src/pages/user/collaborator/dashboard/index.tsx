
import { CollaboratorMenu } from "../../../../components/CompaniesMenu/colaborattorMenu";
import { AdmCompanySideBar } from "../../../../components/SideBar/admCompanysb";
import styles from './styles.module.scss'

export default function DashboardCollaborator(){
    return(
        <>
            <div className={styles.container}>
                <AdmCompanySideBar />
                <CollaboratorMenu />
            </div>
        </>
    )
}