import React, { useState } from 'react'
import { NavbarMenu } from '../../mockData/data';
import { MdComputer } from 'react-icons/md';
import { FaBookReader } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5, delay:0.6}}
    >
        <div className='flex justify-between items-center p-6'>
            {/* logo sec */}
            <div className='text-2xl flex items-center gap-3 font-bold'>
                <p className='mt-2'>ACADEMY</p>
                <FaBookReader className='text-3xl text-blue-600'/>
            </div>
            {/* menu sec */}
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-6 '>
                    {NavbarMenu.map((item) => {
                        return(
                            <li key={item.id}>
                                <a href={item.link} className='inline-block text-gray-600 text-sm xl:text-base
                                py-1 px-2 xl:px-3 hover:text-blue-600 transition-all duration-300
                                font-semibold'>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* cta button sec */}
            <div className='hidden lg:block space-x-2'>
                <button className='text-white bg-blue-700 font-semibold rounded-full px-6 py-2'>Sign in</button>
                <button className='text-white bg-blue-700 font-semibold rounded-full px-6 py-2'>Register</button>
            </div>
            {/* mob hamburger sec */}
            <div className='lg:hidden' onClick={()=>SetIsOpen(!isOpen)}>
                <MdMenu className='text-4xl'/>
            </div>

        </div>
    </motion.div>
                    {/* mobile sidebar menu */}

    <ResponsiveMenu isOpen={isOpen} />
    </>
  )
}

export default Navbar
