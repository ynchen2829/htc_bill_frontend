export default function Card(bill:any){
    console.log(bill)
    let content = bill["bill"]
    return(
        <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{content["name"] + " " +content["title"]}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content["description"]}</p>
</div>
    );
}