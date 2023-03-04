import Head from 'next/head'
import Navbar from '@/components/navbar';
import Card from '@/components/card';
import { useState } from 'react';
import clientPromise from '@/lib/mongodb';
import { Josefin_Sans } from 'next/font/google';

export async function getServerSideProps(context:any) {
  const id = context.query;
  const id_num = Number(id["id"]);
  try {
      const client = await clientPromise;
      const db = client.db("htc_bill");
      const bills = await db
          .collection("full")
          .find({})
          .sort({ time_recent: 1 })
          .skip((id_num-1)*10)
          .limit(10)
          .toArray();
      const limit = (await db
          .collection("full")
          .count())/10;


      return {
          props: { 
            data: [
              JSON.parse(JSON.stringify(bills)),
              id_num,
              limit]
          },
      };
  } catch (e) {
      console.error(e);
  }
}

export default function Home(data:any) {
  const [bills,setBills] = useState(data["data"][0]);
  const [id,setID] = useState(Number(data["data"][1]));
  const [limit,setLimit] =useState( Math.ceil(Number(data["data"][2])));
  const [alive, setAlive] = useState(false);
  const [dead, setDead] = useState(false);
  const [law, setLaw] = useState(false);
  const [tag_status,setTag] =useState( [false,false,false,false,false,false,false,false,false,false,false]);
  const tags = ["Environment", "Gender/Sexuality", "Transportation", "Taxation", "Labor", "Housing", "Health", "Elections", "Education", "Guns", "Inclusivity/Accessibility"];

  const handleSubmit = async () =>{
      console.log("submit clicked");
      const filter1 = [];
      if(dead)filter1.push(0)
      if(alive)filter1.push(1)
      if(law)filter1.push(2)

      const filter2 = [];
      for(var i = 0; i < tags.length; i ++){
        if(tag_status[i])filter2.push(tags[i])
      }
      console.log(id);
      setID(1);
      console.log("id" ,Number(id));
      const obj = { 
        filter1: filter1,
        filter2:filter2,
        id:id
      };

      const request = new Request("/api/filter", {
        method: "POST",
        body: JSON.stringify(obj),
      });

      fetch(request).then(async (response) => {
        const json = await response.json();
        console.log(json)
        setBills(json)
      });


  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200" />      </Head>
      <Navbar></Navbar>
      <aside className="absolute inline-block z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span className="sr-only">Open sidebar</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
    </button>

    <aside id="default-sidebar" className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Bill Status</span>
                </a>
            </li>
            <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <input onClick={()=>{setAlive(!alive)}}  id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In Progress</label>
                </div>
            </li>
            <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <input onClick={()=>{setLaw(!law)}} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Made into Law</label>
                </div>
            </li>
            <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <input onClick={()=>{setDead(!dead)}} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dead</label>
                </div>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Tags</span>
                  </a>
            </li>
            {tags.map((item,index) => (
                <li>
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input onClick={() => {
                          let copy = [...tag_status]
                          copy[index] = !copy[index]
                          setTag(copy)}} type="checkbox" value="" className="sr-only peer"></input>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</span>
                        </label>
                </li>
            ))}

            <li>
            <button type="button" onClick={handleSubmit} className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button>
            </li>
        </ul>
    </div>
    </aside>
    </div>
      </aside>
        <div className="inline-block right-0 justify-center m-5 p-4 sm:ml-64">
          <div className="grid grid-cols-1 text-neutral-600 gap-8">
            {bills.map((item:any, index:any) => (
              <div key={index}>
                <Card bill = {item}></Card>
              </div>
            ))}
          </div>
        </div>
      <footer className="md:flex justify-center p-4">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a href={id["id"]==1 ? "1" : String(Number(id["id"])-1)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href={id["id"]} aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{id["id"]}</a>
            </li>
            <li>
              <a href={Number(id["id"])==limit ? String(limit) : String(Number(id["id"])+1)} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
