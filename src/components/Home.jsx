import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { MdLink } from "react-icons/md";
import micro from "../assets/mic-microphone-png.webp";
import camera from "../assets/google-camera-lens-icon-symbol-free-png.webp";
import youtube from "../assets/youtube-logo-youtube-icon-transparent-free-png.webp";
import github from "../assets/GitHub-Logo.wine.svg";
import Gmail from "../assets/png-transparent-mail-google-gmail-google-s-logo-icon.png";

const Home = () => {
    const data = [
        {
            links: "https://www.youtube.com/",
            image: youtube,
            content: "(1234) Youtube"
        },
        {
            links: "https://github.com/",
            image: github,
            content: "GitHab"
        }, {
            links: "https://www.youtube.com/",
            image: youtube,
            content: "(1234) Youtube"
        },
        {
            links: "https://github.com",
            image: github,
            content: "GitHab"
        },
        {
            links: "https://mail.google.com",
            image: Gmail,
            content: "Gmail"
        },
        {
            links: "https://mail.google.com",
            image: Gmail,
            content: "Gmail"
        },
        {
            links: "https://mail.google.com",
            image: Gmail,
            content: "Gmail"
        },

    ]
    return (
        <div className="items-center  flex justify-center">
            <div>

                <div className='items-center  flex justify-center mt-14 text-[#D3D3D3]'>
                    <div>
                        <h1 className='text-center font-semibold text-[90px] '>Google</h1>
                        <div className=' flex text-black  bg-[#ffffff] w-[550px] h-10 rounded-2xl mt-9 '>
                            <IoIosSearch className='mt-1 ml-2 text-slate-400  xtext-6xl  w-7 h-7' />
                            <input type="text" className='border-none outline-none' />
                            <img src={micro} alt="micro" className='ml-60' />
                            <img src={camera} alt="camera" />
                        </div>
                    </div>
                </div>
                <div className='mt-9'>
                    <div className='grid grid-cols-4 gap-4'>
                        {data?.map((item) => (
                            <a href={item.links} rel="noreferrer" target='_blank'>
                                <div className=' xbg-transparent flex flex-col items-center justify-center  xbg-gray-50 xscale-x-[-1] txransform hover:bg-[#fff] hover:bg-opacity-20 delay-300 cursor-pointer p-2 rounded-md '  >
                                    <img src={item.image} alt="youtube" className='w-14 h-14  rounded-full bg-gray-300 ' />
                                    <h2 className='text-[#D3D3D3] mt-2'>{item.content} </h2>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className='flex  '>
                    <div className='flex fixed bottom-0 text-white gap-2 left-0 m-4'>
                        < MdLink className='mt-1' />
                        <a href="https://500px.com/photo/135751035/soulseek-by-%E5%B0%A4%E9%87%91%E5%B0%BC-ev-tchebotarev" className='underline'>
                            Photo by Ev Tchebotarev
                        </a>
                    </div>
                    <div className='fixed bottom-0 right-0 m-4 '><IoPencilSharp className='text-white' /></div>
                </div>
        </div>
    )
}

export default Home