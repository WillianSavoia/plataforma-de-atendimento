import Head from "next/head";
import { Header } from "../../components/HomeHeader";

import styles from './styles.module.scss';
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CompanyClientsModal } from "../../components/Modals/ComapanyClientsModal";

export default function Clients(){

    const [search, setSearch] = useState('');

    const LowerSearch = search.toLowerCase();

    const empresas = [
        {
        nome: "Coca-cola",
        razão_social: "Coca-cola Brasil",
        tempo: "2 anos",
        cnpj: "11.111.111/0001-11",
        },
        {nome: "Amazon",
        razão_social: "Amazon LTDA",
        tempo: "1 ano",
        cnpj: "22.222.222/0001-22",},
        {nome: "foundever",
        razão_social: "Foundever Brasil",
        tempo: "1 ano",
        cnpj: "33.333.333/0001-33",},
        {nome: "whatsapp",
        razão_social: "WhatsApp Brasil",
        tempo: "6 meses",
        cnpj: "44.444.444/0001-44",},
        {nome: "MoobLab",
        razão_social: "MoobLab Technologies",
        tempo: "3 anos",
        cnpj: "55.555.555/0001-55",
    },
       
    ]
    
    
    const Filter = empresas.filter((empresas) =>  empresas.nome.toLowerCase().includes(LowerSearch))

    return(
        <>
        <Head>
            <title>Plataforma | Clientes</title>
        </Head>
        <Header />

        <div className={styles.container}>
            <h1>Clientes da plataforma:</h1>
            <div className={styles.input}>
                <input type="text"  
                placeholder="Pesquise nossos clientes"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                />
                    
                <HiMagnifyingGlass size={25} className={styles.svg}/>
                
            </div>
            <div className={styles.content}>
                { Filter.map((item ,key) => (
                    
                    <CompanyClientsModal
                    data={item}
                    key={key}
                    />
                    
                ))    
                }
            </div>
            
        </div>
        </>
    )
}