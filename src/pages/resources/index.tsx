import Head from "next/head";
import { useState } from 'react'

import { Header } from "../../components/HomeHeader";

import styles from './styles.module.scss';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HomeFooter } from "../../components/HomeFooter";

export default function Resources(){

    const [search, setSearch] = useState('');

    const Recursos = [{
        recursos: 'Criação De Webhooks',
        descrição: 'Criação de Webhooks, sendo possível executar chamadas HTTP para aplicações externas',
    },
    {
        recursos: 'Criação de Templates Exclusivos',
        descrição: 'É possível a Criação de temples exclusivos e personalizados!'
    },
    {
        recursos: 'Integrado ao WhatsApp',
        descrição: 'A plataforma possui integração com o WhatsApp, não fazendo necessária a instalação de nenhum app terceiro pelo cliente'
    },
    {
        recursos: 'Visualização de conversas encerradas',
        descrição: 'É possível a visualização de conversas já encerradas, tornando possível a avaliação de desempenho dos atendentes'
    },
    {
        recursos: 'Visão geral do administrador',
        descrição: 'O administrador possuí um layout exclusivo contendo informações dos funcionários e conversas, facilitando tomadas de decisões'
    }
];

    const LowerSearch = search.toLowerCase();

    const Filter = Recursos.filter((Recursos) => Recursos.recursos.toLowerCase().includes(LowerSearch))


    return(
        <>
        <Head>
            <title>Plataforma | Recursos</title>
        </Head>
        <Header />
        <div className={styles.container}>
            <h1>Recursos Disponíveis</h1>
            <div className={styles.input}>
                <input type="text"  
                placeholder="Pesquise nossos recursos"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                />
                    
                <HiMagnifyingGlass size={25} className={styles.svg}/>
                
            </div>

            {Filter.map((Empresas, key) => (

                <ul key={key}>
                    <li>
                        <span className={styles.title}>{Empresas.recursos}</span>
                        <span>Descrição: {Empresas.descrição}</span>
                    </li>
                </ul>
            ))}
        </div>
        <HomeFooter />
        </>
    )
}