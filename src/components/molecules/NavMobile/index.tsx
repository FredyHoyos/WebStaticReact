import React from 'react'
import {Icon} from '@iconify/react'
import { useState } from 'react'
import NavTitle from '@/components/atoms/NavTitle/Index';



const Index = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex relative flex-row justify-between items-center w-full h-16 bg-white shadow-md p-5'>
        <div>  
            <img src="/logo.png" alt="logo"/>
        </div>
        <div>
            <button onClick={() =>{
                setIsOpen(!isOpen)

            } }className='hover:cursor-pointer hover:bg-gray-200 text-secondary hover:text-primary'>
                <Icon icon={`${isOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded' }`} 
                width='24' 
                height='24'
                />
            </button>
            </div>
            {isOpen && (        
                <div className='bg-white shadow-md min-w-5/6 p-5 absolute inset-x-10 top-20 rounded-md'>
                    <NavTitle title='Home' link='/'/>
                    <NavTitle title='About' link='/'/>
                    <NavTitle title='Contact' link='/'/>
                    <NavTitle title='Service' link='/'/>
                    <NavTitle title='Blog' link='/'/>
             </div>
            )}
    </div>
  )
}

export default Index