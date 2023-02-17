import { ThemeContext } from '../../../../../context/ThemeContext'
import { AdmCompanyHeader } from "../../../../../components/AdmCompanyHeader";
import { AdmCompanyCollaboratorsMenu } from "../../../../../components/admCollaboratorsMenu";
import { AdmCompanySideBar } from "../../../../../components/SideBar/admCompanysb";
import styles from './styles.module.scss'

import {useContext} from 'react'
import { EditCollaborator } from '../../../../../components/EditCollaborator';

export default function EditPage(){
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${styles.container} ${styles[theme]}`}>
            <AdmCompanySideBar />
            <AdmCompanyCollaboratorsMenu />
            <AdmCompanyHeader />
            <EditCollaborator />
            
        </div>
    )
}