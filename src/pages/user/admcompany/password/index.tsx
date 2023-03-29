import { FormEvent, useContext } from "react";

import { ThemeContext } from "../../../../context/ThemeContext";

import styles from './styles.module.scss'

import Head from "next/head";
import { AdmCompanySideBar } from "../../../../components/SideBar/admCompanysb";
import { AdmCompanyMenuOptions } from "../../../../components/CompaniesMenu/admCompanyMenu";
import { AdmCompanyHeader } from "../../../../components/AdmCompanyHeader";

export default function PasswordConfig (){

  const {theme} = useContext(ThemeContext)
   
    function handleSubmit(event: FormEvent){
       
        event.preventDefault();
    }

    return(

        <>

           <Head>
            <title>Config | Alterar senha</title>
           </Head>

           
              <AdmCompanySideBar />
              
              <AdmCompanyHeader />

              <div className={`${styles.content} ${styles[theme]}`}>
                <h1>Alterar Senha</h1>
                  <form className={styles.passwordForm} onSubmit={handleSubmit}>
                    <label>Senha Atual</label>
                    <input type="password" placeholder="Senha Atual" />
                    <label>Nova Senha</label>
                    <input type="password" placeholder="Nova Senha" />
                    <label>Confirme sua Senha</label>
                    <input type="password" placeholder="Confirmar Senha" />
                    <button type="submit">Salvar</button>
                </form>
              </div>
           
        </>
    )
}