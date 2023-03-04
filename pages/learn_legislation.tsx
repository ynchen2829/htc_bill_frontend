import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css'
import Navbar from '@/components/navbar'
import Foot from '@/components/footerbar'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Learn_Legislation() {
  return (
    <>
      <Head>
        <title>Info</title>
        <meta name="description" content="Info page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <section className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex h-200">
        <h1 className="h-200 text-9xl pb-0 pt-28 px-[302px] mb-[-12px]" >Learn</h1>
        <h2 className="absolute text-6xl pb-0 right-72 top-40 pt-28 mb-[-50px]">[about legislation]</h2>
      </section> 
      <main className={styles.main + " px-156 w-full"}>
        <div className={styles.center + " mx-[28px] w-full"} >
        <div className="relative block left-0">
        <h1 className="font-bold text-3xl">Bill Types:</h1>
            <span>
              blah blah blah
            </span>
          </div>
          <div className="block float-right">
          <h1 className="font-bold text-3xl">Navigation:</h1>
            <ul>
              <li>
                <Link href="/learn_bill_types"><span>Learn Bill Types</span></Link>
              </li>
              <li>
                <Link href="/learn_bill_stages"><span>Learn Bill Stages</span></Link>
              </li>
            </ul>
          </div>
          
        </div>

      </main>
      <Foot></Foot>
    </>
  )
}
