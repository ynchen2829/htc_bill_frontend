import Head from 'next/head'
import clientPromise from '@/lib/mongodb'
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Card from '@/components/card';

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
              id,
              limit]
          },
      };
  } catch (e) {
      console.error(e);
  }
}

export default function Home(data:any) {
  let bills = data["data"][0];
  let id = data["data"][1];
  let limit = Math.ceil(Number(data["data"][2]));
  console.log(limit);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <aside className="sticky inline-block left-0 top-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <Sidebar></Sidebar>
      </aside>
        <div className="absolute inline-block right-0 justify-center m-5 p-4 sm:ml-64">
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
