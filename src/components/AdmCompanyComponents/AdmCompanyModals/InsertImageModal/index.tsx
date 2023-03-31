import { BsFillImageFill } from 'react-icons/bs';
import styles from './styles.module.scss';

import Modal from 'react-modal';
import {useState, useContext} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export function InsertImageModal () {

   const [isOpen, setIsOpen] = useState(false);

   const {theme} = useContext(ThemeContext);

    return(
        <>
            <div className={styles.container}>
                <BsFillImageFill className={styles.svg} size={'100%'} onClick={() => setIsOpen(true)} />
                <span>Imagem</span>
            </div>
            <Modal
            isOpen={isOpen}
            onRequestClose={() => (setIsOpen(false))}
            contentLabel="Insert Image"
            ariaHideApp={false}
            className={`${styles.Modal} ${styles[theme]}`}
            >
                <div className={styles.preview}>
                    <h1>Insira sua imagem:</h1>
                    <input type="file" name="" id="" />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.frtbutton}>Enviar</button>
                    <button onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
                
            </Modal>
        </>
    )
}