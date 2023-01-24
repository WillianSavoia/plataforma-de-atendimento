import { FcGlobe } from "react-icons/fc";
import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";

import styles from './styles.module.scss'

export default function WebhooksConfig () {
    return(
        <>
           <AdmSideBar />
           <AdmOptionsMenu />
           <div className={styles.container}>
            <div className={styles.content}>
            <h1>Configurar Webhooks</h1>
              <div className={styles.createWHbanner}>
                <h2>Crie um Novo Webhook</h2>
                <span>Use webhooks para obter respostas via HTTPS entre as aplicaçoes</span>
               <div> <FcGlobe size={300} /></div>
               <button>Criar novo Webhook</button>
              </div>
            </div>
           </div>
        </>
    )
}

//Criar formulário de criação de webhook através de modal