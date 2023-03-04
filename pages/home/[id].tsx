import Head from 'next/head'
import clientPromise from '@/lib/mongodb'
import Sidebar from '@/components/sidebar';
import Card from '@/components/card';

export async function getServerSideProps(context:any) {
  const id = context.query;
  console.log("server id ", id);
  try {
      const client = await clientPromise;
      const db = client.db("htc_bill");
      const bills = await db
          .collection("full")
          .find({})
          .sort({ time_recent: 1 })
          .skip((id-1)*20)
          .limit(20)
          .toArray();

      return {
          props: { 
            data: [
              JSON.parse(JSON.stringify(bills)),
              id]
          },
      };
  } catch (e) {
      console.error(e);
  }
}

export default function Home(data:any) {
  let bills = data["data"][0];
  let id = data["data"][1];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <Sidebar></Sidebar>
      </aside>
        <div className="justify-center m-5 p-4 sm:ml-64">
          <div className="grid grid-cols-4 text-neutral-600 gap-8">
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
              <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{id["id"]}</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
