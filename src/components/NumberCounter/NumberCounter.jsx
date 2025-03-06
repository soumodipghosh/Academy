import React from 'react'
import CountUp from 'react-countup';

const NumberCounter = () => {
  return (
    <div className='bg-blue-950 text-white py-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
                <CountUp 
                start={0} 
                end={599}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Expert Tutors</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp 
                start={0} 
                end={25000}
                separator=','
                suffix='+'
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Hours Content</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp 
                start={0} 
                end={399}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Subject & Courses</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp 
                start={0} 
                end={72799}
                separator=','
                suffix='+'
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Active Students</p>
        </div>
      </div>
    </div>
  )
}

export default NumberCounter
