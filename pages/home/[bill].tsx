import clientPromise from '@/lib/mongodb'
import Navbar from '@/components/navbar';
import Foot from '@/components/footerbar'
import Link from 'next/link';


export async function getServerSideProps(context:any){
    const name = context.query["bill"];
    console.log(name);
    try {
        const client = await clientPromise;
        const db = client.db("htc_bill");
        const bill = await db
            .collection("full")
            .find({name:name})
            .toArray();

        return {
            props: { 
              data: [
                JSON.stringify(bill)
                ]
            },
        };
    } catch (e) {
        console.error(e);
    }
}

export default function Bill(data:any){
    var bill = data["data"][0];
    bill = JSON.parse(bill);
    bill = bill[0];
    const stages = ["Undetermined","Filed","Out of House Committee","Voted on by House", "Out of Senate Committee", "Voted on by Senate","Governor Action","Bill Becomes Law"];
    const progress = String(Math.floor(Number(bill["stage"])/6 * 100));
    const status = ["💀dead", "🏃In Progress", "✅Completed"]
    return(
        <div>
            <Navbar></Navbar>
            <div className='m-12 pr-64'>
                <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">{bill["title"]}</h1>

                <a href={bill["source"]} target="_blank" className="inline-flex items-center justify-center p-5 text-base font-medium text-blue-800 rounded-lg bg-blue-50 hover:text-blue-900 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="w-full">{bill["name"]}</span>
                    <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a> 

                <div className="my-8 flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">Bill Stage</span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white"> {progress}% ,{stages[Number(bill["stage"])]} </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className={"bg-blue-600 h-2.5 rounded-full w-"+progress}></div>
                </div>

                <div className="my-8 flex-auto gap-1">
                {
                (() => {
                    if (Number(progress) == 0)
                        return <div className="text-lg font-bold text-gray-800 dark:text-gray-400 first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100"> Status : -- </div>
                    if (Number(progress) == 7)
                        return <div className="text-lg font-bold text-gray-800 dark:text-gray-400 first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100"> Status : {status[2]} </div>
                    else (Number(progress) > 0 && Number(progress) < 7)
                        return <div className="text-lg font-bold text-gray-800 dark:text-gray-400 first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100"> Status : {status[1]} </div>
                })()
                }

                    <div className="text-lg font-bold text-gray-800 dark:text-gray-400 first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100"> Author : {bill["author"]}</div>
                    <div className="text-lg font-bold text-gray-800 dark:text-gray-400 first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100"> Last Updated : {bill["time_recent"]}</div>
                    
                </div>

                <p className="my-8 tx-lg font-light text-gray-500 dark:text-gray-400 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{bill["description"]}</p>
            </div>
            <div className='block absolute w-full bottom-0 items-center flex-wrap bg-blue-400 p-3 ' >
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
        </div>

    );
}