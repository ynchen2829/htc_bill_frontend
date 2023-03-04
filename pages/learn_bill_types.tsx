import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Hero.module.css'
import Navbar from '@/components/navbar'
import Foot from '@/components/footerbar'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Learn_Bill_Types() {
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
        <h2 className="absolute text-6xl pb-0 right-72 top-40 pt-28 mb-[-50px]">[about Bill Types]</h2>
      </section> 
      <main className={styles.main + " px-156 w-full"}>
        <div className={styles.center + " mx-[28px] w-full"} >
        <div className="relative inline-block left-0 w-1/2">
            <h1 className="font-bold text-3xl">Bill Types:</h1>
            <ul>
              <li className="m-2">
                Bills: proposals to change state law, either by adding a new law or changing the provisions of an existing law.
              </li>
              <li className="m-2">
                Resolutions: Resolutions are statements of opinions and do not have the force of law.
              </li>
              <li className="m-2">
                Joint Resolutions: proposals to amend the Texas Constitution or ratify a proposed change in the US Constitution.
              </li>
              <li className="m-2">
                Concurrent Resolutions: expressions of a Legislation’s feelings on a subject, instructions to state agencies, or proposals to set up a special study of some issue during the interim between legislative sessions.
              </li>
              <li className="m-2">
                Simple Resolutions: expressions of the Legislature’s sympathy upon a death or congratulations for an accomplishment.
              </li>
              <li className="m-2">
                Prefixes: ‘H’ stands for a bill/resolution proposed by the House. ‘S’ stands for a bill/resolution proposed by the Senate.
              </li>
            </ul>
          </div>
          <div className="absolute block right-48 top-16">
            <h1 className="font-bold text-3xl">Navigation:</h1>
            <ul>
              <li>
                <Link href="/learn_legislation"><span>Learn Legislation</span></Link>
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
