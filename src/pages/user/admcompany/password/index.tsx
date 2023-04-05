import { FormEvent, useContext, useState } from "react";

import { ThemeContext } from "../../../../context/ThemeContext";

import styles from './styles.module.scss'

import Head from "next/head";
import { AdmCompanySideBar } from "../../../../components/AdmCompanyComponents/AdmCompanySideBar";
import { AdmCompanyHeader } from "../../../../components/AdmCompanyComponents/AdmCompanyHeader";

export default function PasswordConfig (){

  const [oldPassword, setOldPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  
  
  const {theme} = useContext(ThemeContext);

   
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
                    <input 
                    type="password" 
                    placeholder="Senha Atual" 
                    value={oldPassword}
                    onChange={(ev) => setOldPassword(ev.target.value)}
                    required
                    />
                    {oldPassword === newPassword &&
                    <span
                    style={{display: newPassword === '' ? 'none' : 'block'}}>A senha nova não pode ser igual a senha atual.</span>
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
                    {newPassword !== confirmPassword &&
                    <span
                    style={{display: confirmPassword === '' ? 'none' : 'block'}}>As senhas precisam ser iguais</span>
                    }
                    <button type="submit"
                    style={{cursor: newPassword !== confirmPassword ? 'pointer' : 'not-allowed',
                    opacity: newPassword !== confirmPassword ? '1' : '.5'}}
                    >Salvar</button>
                </form>
              </div>
           
        </>
    )
}