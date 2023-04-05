import { IoDocumentText } from 'react-icons/io5';
import styles from './styles.module.scss';

import { useState, useContext } from 'react'
import Modal from 'react-modal';
import { ThemeContext } from '../../../../context/ThemeContext';

export function InsertDocumentModal() {

    const [isOpen, setIsOpen] = useState(false);
    
    const {theme} = useContext(ThemeContext)

    return(
        <>
            <div className={styles.container}>
                <IoDocumentText size={'100%'} className={styles.svg} onClick={() => setIsOpen(true)}/>
                <span>Documento</span>
            </div>
            <Modal 
            isOpen={isOpen}
            onRequestClose={() => (setIsOpen(false))}
            contentLabel="Insert Document"
            ariaHideApp={false}
            className={`${styles.Modal} ${styles[theme]}`}
            >
                <div className={styles.preview}>
                    <h1>Insira o Documento:</h1>
                    <input type="file" name="file" className={styles.inputDoc} />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.frtbutton}>Enviar</button>
                    <button onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
            </Modal>
        </>
    )
}