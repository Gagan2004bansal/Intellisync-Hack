import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSpreadsheet } from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoChatboxEllipses } from "react-icons/io5";

const SideBar = ({ activeBar, setActiveBar }) => {

    function onClickHandler() {
        activeBar ? setActiveBar(false) : setActiveBar(true);
    }

    return (
        <div className='flex flex-col justify-center gap-8 p-5 w-8/12 sm:w-4/12 md:w-3/12 lg:w-2/12 bg-black mvh absolute text-white cursor-pointer border-t border-white z-50' onClick={onClickHandler}>
            <div className='flex flex-col gap-y-5 cursor-pointer text-[18px] font-semibold ' >
                <Link to='/home'><div className='hover:text-gray-400 flex gap-x-2 items-center'><FaHome /><p>Home</p></div></Link>
                <Link to='/compiler'><div className='hover:text-gray-400 flex gap-x-2 items-center'><BiSpreadsheet /><p>Compiler</p></div></Link>
                <Link to='/intertwine'><div className='hover:text-gray-400 flex gap-x-2 items-center'><SiGoogleclassroom /><p>InterTwine</p></div></Link>
                <Link to='/community'><div className='hover:text-gray-400 flex gap-x-2 items-center'><CgCommunity /><p>Community</p></div></Link>
                <Link to='/books'><div className='hover:text-gray-400 flex gap-x-2 items-center'><BiSpreadsheet /><p>E-Books</p></div></Link>
            </div>
            <div className='w-full px-3 h-1 bg-white'></div>
            <div className='flex flex-col gap-y-5 cursor-pointer text-[18px] font-semibold'>
                <Link to='/practice'><div className='hover:text-gray-400 flex gap-x-2 items-center'><MdQuiz /><p>Practice</p></div></Link>
                <Link to='/blogs'><div className='hover:text-gray-400 flex gap-x-2 items-center'><FaNoteSticky /><p>Blogs</p></div></Link>
                <Link to='/material'><div className='hover:text-gray-400 flex gap-x-2 items-center'><FaBook /><p>Material</p></div></Link>
                <Link to='/chat'><div className='hover:text-gray-400 flex gap-x-2 items-center'><IoChatboxEllipses /><p>Chatbot</p></div></Link>
                <Link to='/aboutus'><div className='hover:text-gray-400 flex gap-x-2 items-center'><FcAbout /><p>About Us</p></div></Link>
            </div >
        </div >
    )
}

export default SideBar
