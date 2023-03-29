import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

import { AiOutlineCheckCircle } from 'react-icons/ai'
import Modal from 'react-modal';

import styles from './styles.module.scss';

export function CheckedConfirmationModal(){
    const [isOpen, setIsOpen] = useState(false);

    const {theme} = useContext(ThemeContext);

    return(
        <>
            <AiOutlineCheckCircle size={30}  className={styles.svg} onClick={() =>setIsOpen(true)}/>

            <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Checked Confirmation"
            ariaHideApp={false}
            className={`${styles.Modal} ${styles[theme]}`}
            >
                <span>Tem certeza?</span>
                <p>Ao encerrar a conversa, a mesma não poderá ser reaberta.</p>
                <button className={styles.btn}>Encerrar</button>
                <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </Modal>
        </>
    )
}