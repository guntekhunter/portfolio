import React from 'react'

export default function Main() {
  return (
    <div className='flex items-center justify-around text-[#353435]'>
        {/* navbar */}
        <nav className='flex items-center justify-between w-[90%] h-[3rem] realtive'>
            <div>
                <h1 className='font-bold text-[20px]'>AGUNG</h1>
            </div>
            <div className='w-[30%]'>
                <ul className='inline-flex text-[12px] font-bold justify-between w-full'>
                    <li>SUMMARY</li>
                    <li className='text-[#BEBBB5]'>MY WORK</li>
                    <li className='text-[#BEBBB5]'>EXPERIENCE</li>
                    <li className='text-[#BEBBB5]'>SKILLS</li>
                </ul>
            </div>
            <div className='absolute right-0 w-[31rem] border-b-[2px] h-[3rem]'/>
        </nav>
    </div>
  )
}
