import { useRouter } from "next/router";

export default function Card(bill:any){
    let content = bill["bill"]
    console.log("in card ",bill);
    const router = useRouter();
    const handleClick = async (e:any) => {
        e.preventDefault();
        router.push({
            pathname: "/home/"+content["name"],
            query:{
              content
            }
          });
    }

    return(
        <div onClick={handleClick} className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{content["name"] + " " +content["title"]}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content["description"]}</p>
</div>
    );
}