import { AdmHeader } from "../../../../../components/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import { ThemeContext } from "../../../../../context/ThemeContext";
import {useContext} from 'react'

import styles from './styles.module.scss'

export default function TemplatesConfig() {
   const {theme} = useContext(ThemeContext)

    return (
        <>
            <AdmSideBar />
            <AdmOptionsMenu />
            <AdmHeader />
            <div className={`${styles.container} ${styles[theme]}`}>
                <h1>Configurar Templates</h1>
            </div>
        </>
    )
}