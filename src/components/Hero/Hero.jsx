import React from 'react'
import Heroimg from "../../assets/hero.png"
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SlideRight } from '../../utility/animation'

const Hero = () => {
  return (
    <>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
        {/* brand info */}
        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 p-20'>
            <div className='text-center md:text-left space-y-6 '>
                <motion.p variants={SlideRight(0.5)} initial="hidden" animate="visible"
                className='text-orange-700 uppercase font-semibold'>100% Satisfaction Guarantee</motion.p>
                <motion.h1 variants={SlideRight(0.7)} initial="hidden" animate="visible"
                className='text-3xl font-semibold md:text-4xl lg:text-6xl leading-tight text-blue-800'>Find Your Perfect Tutor</motion.h1>
                <motion.p variants={SlideRight(0.9)} initial="hidden" animate="visible"
                className='font-semibold text-green-900'>We will help you to find a perfect tutor for 1-on-1 lessons. It is completely free and private.</motion.p>
              <motion.p variants={SlideRight(0.9)} initial="hidden" animate="visible" className='flex gap-3 font-medium pl-1 lg:pl-0 md:pl-0'>
                {/* <button className='bg-amber-700 font-semibold lg:px-6 lg:py-3 md:px-5 md:py-1 px-2 py-2 rounded-full duration-300 cursor-pointer'>Get Started</button>
                <button className='flex justify-end items-center gap-2 font-semibold'> <span className='w-10 h-10 bg-blue-800/15 rounded-full flex justify-center
                items-center coursor-pointer'><FaPlay className='text-blue-600 coursor-pointer'/></span> See More</button> */}
                <button className='bg-amber-600 px-3 py-2 md:px-3 md:py-2 lg:px-3 lg:py-2 rounded-4xl cursor-pointer'>Get Started</button>
                <button className='bg-amber-600 px-3 py-2 md:px-3 md:py-2 lg:px-3 lg:py-2 rounded-4xl cursor-pointer'>See More</button>
              </motion.p> 
            </div>
        </div>
        {/* hero img */}
        <div className='flex justify-center items-center'>
            <motion.img initial={{opacity:0, x:200}}
        animate={{opacity:1, x:0}}
        transition={{type:"spring", stiffness:100, duration:0.5, delay:0.8}}
        src={Heroimg} alt="" className='w-[350px] md:w-[550px] xl:w-[700px]' />
        </div>
      </div>
    </>
  )
}

export default Hero
