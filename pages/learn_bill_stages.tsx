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
        <h2 className="absolute text-6xl pb-0 right-72 top-40 pt-28 mb-[-50px]">[about Bill Stages]</h2>
      </section> 
      <main className={styles.main + " px-156 w-full"}>
        <div className={styles.center + " mx-[28px] w-full"} >
        <div className="relative inline-block left-0 w-1/2">
            <h1 className="font-bold text-3xl">7 Bill Stages:</h1>
            <ol>
              <li className="m-2">
                1. Filing the Bill:  A representative or senator may get an idea for a bill. They write the bill with assistance from the Texas Legislative Council. After a bill is introduced, a shorter version called the caption is read aloud while the chamber is in session. The presiding officer assigns the bill to a committee.               </li>
              <li className="m-2">
                2. Out of House Committee: The chair of each committee decides when the committee will meet and which bills will be considered. Citizens have a chance to present arguments for either side of the bill. After considering, the committee will choose either to take no action or to issue a report on the bill              </li>
              <li className="m-2">
                3. Voted on by House: Second reading by caption only, and then debating by everybody of the chamber. Amendments to the bill may be offered. The members vote on whether to pass the bill or not. The bill is then read a third time for vote.               </li>
              <li className="m-2">
                4. Out of Senate Committee: same process with senate              
              </li>
              <li className="m-2">
                5. Voted on by Senate: same with senate              
              </li>
              <li className="m-2">
                6. Governor Action: the governor decides either to sign the bill, veto it, or allow it to become a law without a signature.
              </li>
              <li className="m-2">
                7. Bill Becomes Law
              </li>
            </ol>
          </div>
          <div className="absolute block right-48 top-16">
            <h1 className="font-bold text-3xl">Navigation:</h1>
            <ul>
              <li>
                <Link href="/learn_legislation"><span>Learn Legislation</span></Link>
              </li>
              <li>
                <Link href="/learn_bill_types"><span>Learn Bill Types</span></Link>
              </li>
            </ul>
          </div>
          
        </div>

      </main>
      <Foot></Foot>
    </>
  )
}
