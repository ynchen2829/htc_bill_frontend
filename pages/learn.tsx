import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
  return (
    <>
      <Head>
        <title>Info</title>
        <meta name="description" content="Info page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center} style={{margin:'auto'}}>
          <h1>~~~Info Page~~~</h1>
        </div>

      </main>
    </>
  )
}
