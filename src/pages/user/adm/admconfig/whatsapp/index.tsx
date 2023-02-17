import { FormEvent, useContext } from "react";
import { AdmHeader } from "../../../../../components/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

import styles from './styles.module.scss'

export default function WhatsAppConfig(){

  const {theme} = useContext(ThemeContext)

    function handleSubmit(event: FormEvent){
       event.preventDefault()
    }

    return(
        <>

           <Head>
            <title>Config | Whatsapp</title>
           </Head>
        <AdmSideBar />
        <AdmOptionsMenu />
        <AdmHeader />
        <div className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.content}>
              <form className={styles.whatsappform} onSubmit={handleSubmit}>
              <h1>Novo Cadastro</h1>
                <span>Número</span>
                <input 
                type="tel" 
                pattern="([0-9]{2})[9]{1}[0-9]{4}-[0-9]{4}" 
                placeholder="(XX) XXXXX-XXXX"
                required />
                <span>Nome</span>
                <input type="text" required />
                <span>Sobrenome</span>
                <input type="text" required/>
                <span>Tipo de Telefone</span>
                <select name="Celular" className={styles.option} required>
                    <option value="">Escolha</option>
                    <option value="personal">Telefone Pessoal</option>
                    <option value="work">Telefone Empresarial</option>
                </select>
                <button type='submit'>Salvar</button>
              </form>

              <div className={styles.information}> <h2>Após o envio será encaminhado um sms de confirmação para o número cadastrado.</h2></div>
            </div>
             
        </div>
        </>
    )
}