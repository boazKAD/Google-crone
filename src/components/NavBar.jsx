import React from 'react'
import profile from "../assets/3135715.png"
import { IoAppsOutline } from "react-icons/io5";
// import searchLabs from "../assets/8r6Z0ZF5OBzOrArNRG1Li5zLOjUZFjn3M2Nh.png"

const NavBar = () => {
    return (
        <div className="flex text-white gap-5 justify-end mr-7 py-2">
            <div className='flex gap-5 mt-4'>
                <a href="#jhg" >Gmail</a>
                <a href="h"  >Images</a>
                <IoAppsOutline className='mt-1' />
                {/* <img src={searchLabs} alt="searchLabs" className='h-12 w-12 text-slate-300' /> */}
            </div>

            <img src={profile} alt="profile" className='w-12 h-12' />
        </div>
    )
}

export default NavBar