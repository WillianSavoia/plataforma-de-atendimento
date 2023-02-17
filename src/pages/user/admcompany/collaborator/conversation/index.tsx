import { ThemeContext } from '../../../../../context/ThemeContext'
import styles from './styles.module.scss'

import {useContext} from 'react';

export default function ConversationPage(){
    const {theme} = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
            <h1>conversas</h1>
        </div>
        </>
    )
}