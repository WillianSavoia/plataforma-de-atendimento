import { FcGlobe } from "react-icons/fc";
import { AdmHeader } from "../../../../../components/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import {useContext} from 'react'

import styles from './styles.module.scss'
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

export default function WebhooksConfig () {
  const {theme} = useContext(ThemeContext)

    return(
        <>

           <Head>
            <title>Config | Webhooks</title>
           </Head>

           <AdmSideBar />
           <AdmOptionsMenu />
           <AdmHeader />
           <div className={`${styles.container} ${styles[theme]}`}>
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