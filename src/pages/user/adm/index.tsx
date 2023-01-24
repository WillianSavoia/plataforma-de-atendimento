import { AdmSideBar } from "../../../components/SideBar/admSidebar";
import { AdmHeader } from "../../../components/AdmHeader";

import styles from './styles.module.scss'

export default function AdmPage(){
    return(
        <>
     
        <AdmSideBar />
        <AdmHeader />
        <div className={styles.container}>
            <h1>GERAL</h1>
            <div className={styles.content}>
                <div className={styles.total}>
                  <span>
                    Total de empresas cadastradas:
                       <h2>9 Empresas</h2>
                  </span>
                </div>
         
            </div>
        </div>
        </>
    )
}