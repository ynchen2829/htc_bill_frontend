import Link from 'next/link';

export default function Foot(props:any){
    return (
    <>
      <div className='block relative w-full bottom-0 items-center flex-wrap bg-blue-400 p-3 ' >
        <ul>
            <li>
                <Link href='/resources' className = ''>
                    <span className=''>
                        Resources
                    </span>   
                </Link>
            </li>
            
            <li>
                <Link href='/team' className = ''>
                    <span className=''>
                        Team
                    </span>   
                </Link>
            </li>
            
        </ul>
        
      </div>
    </>
  );
};