import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './styles.module.scss'



export function SwitchInput (){
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <>
        <input type="checkbox" 
        className={styles.input} 
        onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}
        id="switch-shadow" />
     
        </>
    )
}