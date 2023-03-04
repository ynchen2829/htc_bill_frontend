import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.center} style={{margin:'auto'}}>
          <h1>~~~Get in contact with new legislation~~~</h1>
        </div>

      </main>
    </>
  )
}
