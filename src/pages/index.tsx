import { Carrousel } from "../components/Carrousel";
import { Header } from "../components/HomeHeader";
import { ThemeContext } from "../context/ThemeContext";

import {useContext} from 'react';

import styles from './styles.module.scss'


export default function Home() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
    <div className={theme}>
    <div className={styles.container}>
     <Header />
     <Carrousel />
     
    

     </div>
    </div>
    </>
  )
}


