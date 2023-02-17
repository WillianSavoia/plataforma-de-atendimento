import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import {FormEvent, useContext} from 'react';

import styles from './styles.module.scss'
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { AdmHeader } from "../../../../../components/AdmHeader";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";

export default function SubDomain () {
    const {theme} = useContext(ThemeContext)
    
    function handleSubmit (event: FormEvent){
        event.preventDefault();
    }

    return(
        <>

           <Head>
            <title>Config | Subdomínio</title>
           </Head>

            <AdmSideBar />
            <AdmOptionsMenu />
            <AdmHeader />
            <div className={`${styles.container} ${styles[theme]}`}>
                <div className={styles.content}>
                    <h1>Configurar Subdomínio</h1>
                    <form className={styles.subdomain} onSubmit={handleSubmit}>
                        <h2>Adicionar um Subdomínio</h2>
                        <label>Insira o Subdomínio</label>
                        <input type="url" placeholder="subdomínio" />
                        <label> Escolha o domínio</label>
                        <select name="subdomain" className={styles.domain} required>
                                <option value="">selecione</option>
                                <option value="domain1">dominio1.com.br</option>
                                <option value="domain2">dominio2.com.br</option>
                                <option value="domain3">dominio3.com.br</option>
                </select>   
                     <button type="submit">Salvar</button>
                    </form>
                    <div className={styles.domainList}>
                        <h2>Subdomínios Cadastrados</h2>
                        <ul>
                            <li>
                                <Link href="#" className={styles.link}>subdomínio.dominio1.com.br</Link> 
                                <button className={styles.fButton}><BiTrash size={25} color="#a8a8b3" /></button>
                            </li>
                            <li>
                                <Link href="#" className={styles.link}>subdomínio.dominio2.com.br</Link>
                                <button><BiTrash size={25} color="#a8a8b3" /></button>
                            </li>
                            <li>
                                <Link href="#" className={styles.link}>subdomínio.dominio3.com.br</Link>
                                <button><BiTrash size={25} color="#a8a8b3" /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}