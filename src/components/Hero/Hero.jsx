import React from 'react'
import Heroimg from "../../assets/hero.png"
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SlideRight } from '../../utility/animation'

const Hero = () => {
  return (
    <>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        {/* brand info */}
        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 p-20'>
            <div className='text-center md:text-left space-y-6 '>
                <motion.p variants={SlideRight(0.5)} initial="hidden" animate="visible"
                className='text-orange-700 uppercase font-semibold'>100% Satisfaction Guarantee</motion.p>
                <motion.h1 variants={SlideRight(0.7)} initial="hidden" animate="visible"
                className='text-5xl font-semibold lg:text-6xl leading-tight'>Find Your Perfect Tutor</motion.h1>
                <motion.p variants={SlideRight(0.9)} initial="hidden" animate="visible"
                className='font-semibold'>We will help you to find a perfect tutor for 1-on-1 lessons. It is completely free and private.</motion.p>
              <motion.div variants={SlideRight(1.1)} initial="hidden" animate="visible"
              className='flex gap-8 justify-center md:justify-start !mt-8 items-center'>
                <button className='bg-amber-700 font-semibold px-6 py-3 rounded-full hover:scale-110
                hover:shadow-xl duration-300'>Get Started</button>
                <button className='flex justify-end items-center gap-2 font-semibold'> <span className='w-10 h-10 bg-blue-800/15 rounded-full flex justify-center
                items-center'><FaPlay className='text-blue-600'/></span> See More</button>
              </motion.div>
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
