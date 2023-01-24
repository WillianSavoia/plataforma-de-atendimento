import { FormEvent } from "react";
import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";

import styles from './styles.module.scss'

export default function PasswordConfig (){
   
    function handleSubmit(event: FormEvent){
       
        event.preventDefault();
    }

    return(

        <>
          <AdmSideBar />
          <AdmOptionsMenu />

          <div className={styles.content}>
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