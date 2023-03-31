import { CollaboratorHeader } from "../../../../components/CollaboratorComponents/CollaboratorHeader";
import { CollaboratorSideBar } from "../../../../components/CollaboratorComponents/SideBar";

import styles from './styles.module.scss';

import Head from 'next/head';

import {useContext, FormEvent} from 'react'
import { ThemeContext } from "../../../../context/ThemeContext";

export default function PasswordConfig () {

    
    const {theme} = useContext(ThemeContext)
   
function handleSubmit(event: FormEvent){
   
    event.preventDefault();
}

return(

    <>

       <Head>
        <title>Config | Alterar senha</title>
       </Head>

       
          <CollaboratorSideBar />
          
          <CollaboratorHeader />

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
