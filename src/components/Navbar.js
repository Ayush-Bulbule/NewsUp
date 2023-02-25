import React from 'react'
import {HiSun} from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className='w-screen dark:bg-slate-900 fixed light:bg-gray-200 border-b-2 border-gray-700'>
        <div className="container mx-auto items-center md:px-12 px-6 py-4 flex justify-between">
            <h2 className="text-2xl logo-text dark:text-gray-50">NewsUp!</h2>
            <div className="btn-mode">
                <HiSun className="text-xl dark:text-gray-300" />
            </div>
        </div>
    </div>
  )
}

export default Navbar