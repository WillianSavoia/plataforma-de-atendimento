/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

import Modal from 'react-modal';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import { AiOutlineClose } from 'react-icons/ai';


const info = 
    {Id: 1,
        name: 'Willian Sanches Savoia',
        avatar: 'https://github.com/WillianSavoia.png',
        cargo: 'Desenvolvedor web',
        cpf: '479.816.768.19',
        telefone: '(11)98323-3428',
        admissão : '25/03/2023'
   };
 

export function CollaboratorUserInfoModal () {
    

    const [isOpen, setIsOpen] = useState(false); 

    const {theme} = useContext(ThemeContext)

return(
     <>
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.picture}>
                    <img src={info.avatar} alt="Avatar" className={styles.avatar} />
                </div>
                
                <div className={styles.openModal}  onClick={() => setIsOpen(true)}>
                        <h2>{info.name}</h2>
                        <span>Clique aqui para editar ou ver mais</span>
                </div>
                
            </div>
        </div>

        <Modal
        isOpen={isOpen}
        onRequestClose={() => (setIsOpen(false))}
        contentLabel="New Conversation"
        ariaHideApp={false}
        className={`${styles.Modal} ${styles[theme]}`}
        > 
            <div className={styles.header}>
                <h2>Informações de contato</h2>
                <AiOutlineClose onClick={() => setIsOpen(false)} className={styles.svg} size={25}/>
            </div>
            <div className={styles.modalInfo}>
                    <div className={styles.picture}>
                        <img src={info.avatar} alt="Avatar" className={styles.avatar} />
                    </div>
                    <div className={styles.userInfo}>
                            <h2>{info.name}</h2>
                            <span className={styles.cpf}>CPF: {info.cpf}</span>
                            <span>Cargo: {info.cargo}</span>
                    </div>
                    <div className={styles.othersInfo}>
                        <span>Telefone: {info.telefone}</span>
                        <span>N. de cadastro: {info.Id}</span>
                        <span>Admissão:{info.admissão}</span>
                    </div>
            </div>

        </Modal>
     </>
)
}