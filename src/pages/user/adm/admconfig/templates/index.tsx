import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";

import styles from './styles.module.scss'

export default function TemplatesConfig() {
    return (
        <>
            <AdmSideBar />
            <AdmOptionsMenu />
            <div className={styles.container}>
                <h1>Configurar Templates</h1>
            </div>
        </>
    )
}