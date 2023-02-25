import React, { useEffect, useState } from 'react'



const SearchBox = ({onInputChange,onButtonClick}) => {
    
    return (

        <div
            className="focus-within:ring-2 mt-24 w-100 focus-within:ring-cyan-500 flex justify-between rounded-full shadow-lg bg-slate-600"
        >
            <input
                type="text"
                className="flex-1 outline-none rounded-full p-4 text-lg text-white bg-slate-600"
                placeholder="Search news.."
                onChange={onInputChange}

            />
            <button
                onClick={onButtonClick}
                className="bg-cyan-500 text-white m-1 font-medium px-6 py-3 rounded-full hover:bg-cyan-600"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBox