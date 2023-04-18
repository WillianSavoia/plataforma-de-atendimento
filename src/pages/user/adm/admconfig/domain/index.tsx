import { AdmOptionsMenu } from "../../../../../components/AdmComponents/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/AdmComponents/AdmSideBar";
import {FormEvent, useContext} from 'react';

import styles from './styles.module.scss'
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { AdmHeader } from "../../../../../components/AdmComponents/AdmHeader";
import { ThemeContext } from "../../../../../context/ThemeContext";

import Head from "next/head";
import { AdmOptionsResponsiveMenu } from "../../../../../components/AdmComponents/OptionsMenu/OptionsResponsiveMenu";

export default function SubDomain () {
    const {theme} = useContext(ThemeContext)
    
    function handleSubmit (event: FormEvent){
        event.preventDefault();
    }

    return(
        <>

        <div className={`${styles.container} ${styles[theme]}`}>
           <Head>
            <title>Config | Subdomínio</title>
           </Head>

            <AdmSideBar />
            <AdmHeader />
            <AdmOptionsMenu />
            <AdmOptionsResponsiveMenu />
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
                                <Link href="#" className={`${styles.link} ${styles[theme]}`}>subdomínio.dominio1.com.br</Link> 
                                <BiTrash size={25} className={styles.svg}/>
                            </li>
                            <li>
                                <Link href="#" className={`${styles.link} ${styles[theme]}`}>subdomínio.dominio2.com.br</Link>
                                <BiTrash size={25} className={styles.svg}/>
                            </li>
                            <li>
                                <Link href="#" className={`${styles.link} ${styles[theme]}`}>subdomínio.dominio3.com.br</Link>
                                <BiTrash size={25} className={styles.svg}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}