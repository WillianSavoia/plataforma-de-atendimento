import { FormEvent, useContext } from "react";
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/AdmComponents/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

import styles from './styles.module.scss'
import { InputMaskTel } from "../../../../../components/AdmComponents/InputMaskTel";
import { AdmOptionsResponsiveMenu } from "../../../../../components/AdmComponents/OptionsMenu/OptionsResponsiveMenu";

export default function WhatsAppConfig(){

  const {theme} = useContext(ThemeContext)

    function handleSubmit(event: FormEvent){
       event.preventDefault()
    }

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>

           <Head>
            <title>Config | Whatsapp</title>
           </Head>
        <AdmSideBar />
        <AdmHeader />
        <AdmOptionsResponsiveMenu />
        <AdmOptionsMenu />
            <div className={styles.content}>
              <form className={styles.whatsappform} onSubmit={handleSubmit}>
              <h1>Novo Cadastro</h1>
                <span>Número</span>
                <InputMaskTel />
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