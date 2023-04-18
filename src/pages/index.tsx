import { Carrousel } from "../components/Carrousel";
import { Header } from "../components/HomeHeader";
import { ThemeContext } from "../context/ThemeContext";

import {useContext} from 'react';

import styles from './styles.module.scss'
import Head from "next/head";
import { HomeFooter } from "../components/HomeFooter";


export default function Home() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
    
    <Head>
      <title>Plataforma | Home</title>
    </Head>
    <div className={styles.container}>
     <Header />
     <Carrousel />
     
    

     </div>
     <HomeFooter />
    
    </>
  )
}


