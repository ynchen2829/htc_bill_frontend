import { useRouter } from "next/router";
export default function Card(bill:any){
    let content = bill["bill"]
    //console.log("in card ",bill);
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
        <div onClick={handleClick} className="flex overflow-hidden flex-direction-row items-center justify-start w-full p-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {
                (() => {
                    if (content["status"] == 2)
                        return <div className="relative block pt-10 px-20 pb-2.5 ml-[-100px] mr-[-75px] -rotate-90 bg-green-200">COMPLETE</div>
                    if (content["status"] == 1 || content["stage"] == 0)
                        return <div className="relative block pt-10 px-20 pb-2.5 ml-[-100px] mr-[-75px] -rotate-90 bg-yellow-200">ACTIVE</div>
                    else (content["status"] == 0)
                        return <div className="relative block pt-10 px-20 pb-2.5 ml-[-100px] mr-[-75px] -rotate-90 bg-red-200">DEAD</div>
                })()
            }


            {/* <div className="relative block pt-10 px-20 pb-2.5 ml-[-100px] mr-[-75px] -rotate-90 bg-blue-200">Complete</div>  */}
            <a className="block w-full pr-0 m-5">
                <h2 className = "mb-2 text-l tracking-tight text-gray-900 dark:text-white">{content["name"]}</h2>
                <h1 className="inline-block w-5/6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{content["title"]}</h1>
                <span className="material-symbols-outlined float-right text-5xl">
                    double_arrow
                </span>

                {/* <p>{content["tags"].join(" ")}</p> */}
            </a> 
    </div>
    );
}