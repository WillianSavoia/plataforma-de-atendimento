import { ThemeContext } from '../../../../../context/ThemeContext'
import { AdmCompanyHeader } from "../../../../../components/AdmCompanyHeader";
import { AdmCompanyCollaboratorsMenu } from "../../../../../components/admCollaboratorsMenu";
import { AdmCompanySideBar } from "../../../../../components/SideBar/admCompanysb";
import styles from './styles.module.scss'

import {useContext} from 'react'
import { DeleteCollaborator } from '../../../../../components/DeleteCollaborators';

export default function DeletePage(){
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${styles.container} ${styles[theme]}`}>
            <AdmCompanySideBar />
            <AdmCompanyCollaboratorsMenu />
            <AdmCompanyHeader />
            <DeleteCollaborator />
            
        </div>
    )
}