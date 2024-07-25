import React from 'react'
import SideBar from './SideBar';
import { CgMenuGridO } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './SideBar.css';

const Navbar = ({ activeBar, setActiveBar }) => {

    function onClickHandler() {
        activeBar ? setActiveBar(false) : setActiveBar(true);
    }

    return (
        <div className=''>
            <div className='bg-black py-4 pl-3 md:pl-7 text-white cursor-pointer svh flex gap-x-5 items-center h-10b shadow-md'>
                <CgMenuGridO size={40} onClick={onClickHandler} />
                <Link to='/home'><p className='text-[25px] font-bold'>IntelliSync</p></Link>
            </div>
            <div>
                {
                    activeBar ? <div></div> : <SideBar activeBar={activeBar} setActiveBar={setActiveBar} />
                }
            </div>
        </div>
    )
}

export default Navbar
