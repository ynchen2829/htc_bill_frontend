import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css'
import Navbar from '@/components/navbar'
import Foot from '@/components/footerbar'

const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
    return (
      <>
        <Head>
<<<<<<< Updated upstream
          <title>Contact</title>
          <meta name="description" content="Contact" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Debrief_favicon.svg" />
        </Head>
        <Navbar></Navbar>
        <main className={styles.main}>
          <div className={styles.center +" bg-green-200"} style={{margin:'auto'}}>
            <h1>~~~Get in contact with new legislation~~~</h1>
          </div>
  
        </main>
=======
        <title>Info</title>
        <meta name="description" content="Info page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <section className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex h-200">
        <h1 className="h-200 text-9xl pb-0 pt-28 px-[302px] mb-[-12px]" >Resources</h1>
      </section> 
      <main className={styles.main + " px-128"}>
        <div className={styles.center + " mx-[220px]"} >
          import import import import import import import import import import import import import import import import import import import import import importimportimport import import import import import import import import import import import import import import
          <h1>~~~Info Page~~~</h1>
        </div>

      </main>
      <Foot></Foot>
>>>>>>> Stashed changes
      </>
    )
  }