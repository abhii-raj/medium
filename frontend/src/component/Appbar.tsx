// import React from 'react'

import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const Appbar = () => {
  return (
    <div className="border-b  flex justify-between px-10 py-2 border-slate-400">
        
        
            <Link to='/blog' className="flex flex-col justify-center cursor-pointer">
                Medium
            </Link>
        
        
        
        <div  className="flex flex-col justify-center">
            <div className="flex">
                <Link to='/publish'>
                    <button type="button" className="text-white cursor-pointer flex items-center justify-center  bg-green-700 hover:bg-green-800 w-20 h-7 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1.5 text-center alig  mx-2">Publish</button>
                </Link>
                <Avatar author={"Abhishek"} size ={"xl"}/>
            </div>
        </div>

    </div>
  )
}

export default Appbar