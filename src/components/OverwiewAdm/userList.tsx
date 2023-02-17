import styles from './userList.module.scss'

import Link from "next/link"
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export function UserList() {

    const {theme} = useContext(ThemeContext)

    const users=[
        {
            usuário: "Leonardo da Silva Pereira",
            empresa: "Empresa 1",
            whatsApp: "(11) 91111-1111"
        },
        {
            usuário: "Marcelo Macedo Lopes",
            empresa: "Empresa 2",
            whatsApp: "(11) 92222-2222"
        },
        {
            usuário: "Rodrigo de Paula Moura",
            empresa: "Empresa 3",
            whatsApp: "(11) 93333-3333"
        },
        {
            usuário: "Patrícia Ferraz Lima",
            empresa: "Empresa 4",
            whatsApp: "(11) 94444-4444"
        },
        {
            usuário: "Rafael Borges Pereira",
            empresa: "Empresa 5",
            whatsApp: "(11) 95555-5555"
        },
        {
            usuário: "Cássia Veiga Candido Savoia",
            empresa: "Empresa 6",
            whatsApp: "(11) 96666-6666"
        },
        {
            usuário: "João Paulo Martins",
            empresa: "Empresa 7",
            whatsApp: "(11) 97777-7777"
        },
        {
            usuário: "Maria Aparecida Santos",
            empresa: "Empresa 8",
            whatsApp: "(11) 98888-8888"
        },
        {
            usuário: "Willian Veiga Sanches Savoia",
            empresa: "Empresa 9",
            whatsApp: "(11) 99999-9999"
        }
 
    ]

    return (
        <>
        <div className={styles.container}>
            {users.map(users => (
                <>
                <li className={`${styles[theme]}`}>
                    <Link href="#" className={styles.users}>{users.usuário}</Link>
                    <span >{users.empresa}</span>
                    <span >{users.whatsApp}</span>
                </li>
                </>
            ))}
        </div>
        </>
    )
}

