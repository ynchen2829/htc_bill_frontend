/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import Image from 'next/image'


export default function Navbar(props:any){
    return (
    <>
      <nav className='block items-center flex-wrap bg-blue-400 p-3 px-16' >
        <Link href='/' className='inline-flex items-center p-2 mr-4 aligh-right'>
            <Image
              src="/Debrief.svg" alt = "Logo" width={100} height ={100}
            />
        </Link>

        <Link href='/contact' className = 'inline-flex items-center py-2 px-4 mr-4 float-right'>
            <span className='text-xl text-white font-bold tracking-wide'>
                theGrave
            </span>   
        </Link>

        <Link href='/learn_legislation' className = 'inline-flex items-center py-2 px-4 mr-4 float-right'>
            <span className='text-xl text-white font-bold tracking-wide'>
                Learn
            </span>              
        </Link>

        <Link href='/1' className = 'inline-flex items-center py-2 px-4 mr-4 float-right'>
            <span className='text-xl text-white font-bold tracking-wide'>
                Explore
            </span>   
        </Link>
      </nav>
    </>
  );
};