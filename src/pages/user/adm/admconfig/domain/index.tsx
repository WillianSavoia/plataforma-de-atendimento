import { AdmOptionsMenu } from "../../../../../components/OptionsMenu/admOptions";
import { AdmSideBar } from "../../../../../components/SideBar/admSidebar";
import {FormEvent} from 'react';

import styles from './styles.module.scss'
import Link from "next/link";
import { BiTrash } from "react-icons/bi";

export default function SubDomain () {
    
    function handleSubmit (event: FormEvent){
        event.preventDefault();
    }

    return(
        <>
            <AdmSideBar />
            <AdmOptionsMenu />
            <div className={styles.container}>
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
                                <button className={styles.fButton}><BiTrash size={25} color="#fff" /></button>
                            </li>
                            <li>
                                <Link href="#" className={styles.link}>subdomínio.dominio2.com.br</Link>
                                <button><BiTrash size={25} color="#fff" /></button>
                            </li>
                            <li>
                                <Link href="#" className={styles.link}>subdomínio.dominio3.com.br</Link>
                                <button><BiTrash size={25} color="#fff" /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}