import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import {BiTrash} from 'react-icons/bi';

import styles from './DeleteCollabModal.module.scss';


export function DeleteCollaboratorModal() {
    const [isOpen, SetIsOpen] = useState(false);

  
   
    function HandleSubmit (event: FormEvent){
        event.preventDefault();
    }

    return(
        <>
        <div className={styles.container}>
            <button  className={styles.edit} onClick={() => (SetIsOpen(true))}><BiTrash size={25} /></button>
            <Modal
            isOpen={isOpen}
            onRequestClose={() => (SetIsOpen(false))}
            contentLabel="Delete Collaborator Modal"
            ariaHideApp={false}
            className={styles.Modal}
            >
               <h2>Excluir funcionário?</h2>
               <span>Ao excluir um funcionário, os dados de cadastro não poderão ser recuperados.</span>
              <div>
              <button>Excluir</button>
               <button onClick={() => (SetIsOpen(false))}>Cancelar</button>
              </div>
            </Modal>
        </div>
        </>
    )
}

