import React from "react";

export default function SearchBar() {
    return (
        <div className='block items-center flex-wrap bg-blue-400 p-3 '>
            <div className="flex w-1/2 m-auto border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    );
}