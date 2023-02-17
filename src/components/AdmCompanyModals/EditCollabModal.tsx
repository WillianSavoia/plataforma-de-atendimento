import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import {FiEdit2} from 'react-icons/fi';

import styles from './EditCollabModal.module.scss';


export function EditCollaboratorModal() {
    const [isOpen, SetIsOpen] = useState(false);

  
   
    function HandleSubmit (event: FormEvent){
        event.preventDefault();
    }

    return(
        <>
        <div className={styles.container}>
            <button  className={styles.edit} onClick={() => (SetIsOpen(true))}><FiEdit2 size={20} /></button>
            <Modal
            isOpen={isOpen}
            onRequestClose={() => (SetIsOpen(false))}
            contentLabel="Edit Collaborator Modal"
            ariaHideApp={false}
            className={styles.Modal}
            >
                <form onSubmit={HandleSubmit} className={styles.form}>
                    <h2>Editar</h2>
                  <div className={styles.elements}>
                    <div className={styles.inputs}>
                    <span>Nome</span>
                      <input type="text" />
                    </div>
                      <div className={styles.inputs}>
                      <span>Cargo</span>
                    <select name="cargo" className={styles.cargo} required>
                                <option value="">Selecione</option>
                                <option value="Atendente">Atendente</option>
                                <option value="Supervisor">Supervisor</option>
                                <option value="Administrador">Administrador</option>
                </select>  
                      </div>
                </div>
                <div className={styles.elements}>
                <div className={styles.inputs}>
                <span>Telefone</span>
                <input type="tel" name="telefone" id="telefone" placeholder="00.000.000-0" />
                </div>
                <div className={styles.inputs}>
                <span>CPF</span>
                <input type="tel" name="CPF" id="CPF" placeholder="000.000.000-00" />
                </div>
                </div>
                <div className={styles.elements}>
                <div className={styles.inputs}>
                <span>Cadastro</span>
                <input type="tel" name="cadastro" id="cadastro" />
                </div>   
                <div className={styles.inputs}>
                <span>Contato</span>    
                <input type="tel" name="Telefone" id="Telefone" placeholder="(00) 90000-0000"/>
                </div>
                </div>
               <div className={styles.buttons}>
               <button type="submit">Salvar</button>
                <button onClick={() => (SetIsOpen(false))}>Cancelar</button>
               </div>
                </form>
            </Modal>
        </div>
        </>
    )
}

