import React from 'react'
import Image from "@/components/atoms/Image/Index";
import {SubTitle } from '@/components/atoms/Titles';  


const Index = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center w-[255px] h-[400px] bg-white shadow-lg'>
           <div className='h-1/2'>
                <Image src="/Blog1.png" alt="hero" /> 
           </div>
           <div className='flex flex-col items-start justify-center h-1/2 w-full p-2 my-2'>
            <h5 className='text-[10px] text-gris font-extralight'>By Claire Robinson</h5>
            <SubTitle title="Receive money in any currency with no fees"/>
            <p className='text-[13px] text-gris font-light h-[72px] text-ellipsis overflow-hidden'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single</p>
           </div>

        </div>
    </div>
  )
}

export default Index