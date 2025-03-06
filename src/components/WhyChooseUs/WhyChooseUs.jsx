import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import { SlideLeft } from '../../utility/animation'

const WhyChooseUs = () => {
    const WhyChooseData = [
        {
            id:1,
            title:"One-on-one Teaching",
            desc:"All of our special education experts have a degree in special education",
            icon:<GrYoga/>,
            bgColor:"#0063ff",
            delay: 0.3,
        },
        {
            id:2,
            title:"24/7 Tutor Availability",
            desc:"Our tutors are always available to respond as quick as possible for you",
            icon:<FaDumbbell/>,
            bgColor:"#73bc00",
            delay: 0.6,
        },
        {
            id:3,
            title:"Interective Whiteboard",
            desc:"Our digital whiteboard equipped with audio and video chat features",
            link:"/",
            icon:<GiGymBag/>,
            bgColor:"#fa6400",
            delay: 0.9,
        },
        {
            id:4,
            title:"Affordable price",
            desc:"Choose an expert tutor based on your budget and per hour",
            link:"/",
            icon:<GiGymBag/>,
            bgColor:"#fe6baa",
            delay: 0.9,
        }
    ]
  return (
    <div className='bg-[d6d6d6]'>
      <div className=' py-24'>
        {/* header section */}
        <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
            <h1 className='font-semibold text-orange-800'>WHY CHOOSE US</h1>
            <p className='font-semibold text-3xl'>Benefits of online tutoring services with us</p>
        </div>
        {/* cards section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6'>
            {
                WhyChooseData.map((item)=>{
                    return(
                        <motion.div 
                        variants={SlideLeft(item.delay)}
                        initial="hidden"
                        whileInView={"visible"}
                        className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-white'>
                            <div style={{backgroundColor: item.bgColor}} className='w-10 h-10 rounded-lg flex justify-center items-center text'>
                                <div className='text-2xl'>{item.icon}</div>
                            </div>
                            <p className='font-semibold'>{item.title}</p>
                            <p className='text-sm text-gray-600'>{item.desc}</p>
                        </motion.div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
