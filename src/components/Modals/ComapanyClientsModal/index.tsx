import { useState } from 'react';
import styles from './styles.module.scss'

import Modal from 'react-modal'
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface CompanyClientsModalProps{
    data: {
        nome: string;
        razão_social: string;
        cnpj: string
        tempo: string;
    }

}

export function CompanyClientsModal({data}: CompanyClientsModalProps){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className={styles.empresa} onClick={() => setIsOpen(true)}>
                <span className={styles.name}>{data.nome}</span>
            </div>
        

            <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel='Informações das empresas'
            className={styles.Modal}>
                <AiOutlineCloseCircle size={25} className={styles.svg} onClick={() => setIsOpen(false)}/>
                <span>Nome da Empresa: {data.nome}</span>
                <span>Razão Social: {data.razão_social}</span>
                <span>CNPJ: {data.cnpj}</span>
                <span>Tempo na plataforma: {data.tempo}</span>
            </Modal>
        </>
    )

}