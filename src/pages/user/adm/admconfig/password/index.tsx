import { FormEvent, useContext, useState } from "react";
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { AdmOptionsMenu } from "../../../../../components/AdmComponents/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import { ThemeContext } from "../../../../../context/ThemeContext";

import styles from './styles.module.scss'

import Head from "next/head";
import { AdmOptionsResponsiveMenu } from "../../../../../components/AdmComponents/OptionsMenu/OptionsResponsiveMenu";

export default function PasswordConfig (){

  const {theme} = useContext(ThemeContext)

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
   
    function handleSubmit(event: FormEvent){
       
        event.preventDefault();
    }

    return(

        <>

          <div className={`${styles.content} ${styles[theme]}`}>

          <AdmSideBar />
          <AdmHeader />
          <AdmOptionsResponsiveMenu />
          <AdmOptionsMenu />
           <Head>
            <title>Config | Alterar senha</title>
           </Head>

            <h1 className={styles.title}>Alterar Senha</h1>
            <form className={styles.passwordForm} onSubmit={handleSubmit}>
                <label>Senha Atual</label>
                <input type="password"
                placeholder="Senha Atual"
                value={oldPassword}
                onChange={(ev) => setOldPassword(ev.target.value)}
                required
                />
                { oldPassword === newPassword &&
                <span
                style={{display: newPassword === '' ? 'none' : 'block'
                }}>A nova senha atual não pode ser igual a anterior.</span>
                }
                <label>Nova Senha</label>
                <input 
                type="password" 
                placeholder="Nova Senha"
                value={newPassword}
                onChange={(ev) => setNewPassword(ev.target.value)}
                required
                />
                <label>Confirme sua Senha</label>
                <input 
                type="password" 
                placeholder="Confirmar Senha" 
                value={confirmPassword}
                onChange={(ev) => setConfirmPassword(ev.target.value)}
                required
                />
                { newPassword !== confirmPassword &&
                <span
                style={{
                  display: confirmPassword === '' ? 'none' : 'block'
                }}>As senhas não batem.</span>
                }
                <button
                style={{cursor: newPassword !== confirmPassword ? 'pointer' : 'not-allowed',}}
                type="submit">Salvar</button>
            </form>
          </div>
        </>
    )
}