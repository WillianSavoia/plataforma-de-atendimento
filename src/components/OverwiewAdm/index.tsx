import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from './styles.module.scss'
import { UserList } from './userList'

export function Overwiewl () {
  const {theme} = useContext(ThemeContext)
    return(
        <>
         
         <div className={styles.container }>
            <h1>Estatísticas</h1>
            <div className={styles.content}>
                <div className={`${styles.statistics} ${styles[theme]}`}>
                  <div className={styles.total}>
                    <span>
                         empresas cadastradas:
                         <h2>9 Empresas</h2>
                         <p>Atualizado há 1 minuto</p>
                    </span>
                  </div>
                  <div className={styles.Active}>
                    <span>
                         empresas ativas:
                         <h2>5 Empresas</h2>
                         <p>Atualizado há 1 minuto</p>
                    </span>
                  </div>
                  <div className={styles.Inactive}>
                    <span>
                         empresas inativas:
                         <h2>4 Empresas</h2>
                         <p>Atualizado há 1 minuto</p>
                    </span>
                  </div>
                  <div className={styles.Confirmation}>
                    <span>
                         aguardando confirmação:
                         <h2>15 Empresas</h2>
                         <p>Atualizado há 1 minuto</p>
                    </span>
                  </div>
                </div>
                <div className={styles.usersList}>
                    <h2>Usuários Cadastrados</h2>
                    <UserList />
                </div>
            </div>
        </div>
      
        </>
    )
}