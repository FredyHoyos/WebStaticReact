import React from 'react'
import NavTitle from '@/components/atoms/NavTitle/Index';
import Button from '@/components/atoms/Button/Index';

const Index = () => {
  return (
    <nav className='flex flex-row justify-around items-center w-full h-20 bg-white shadow-md'>
        <div>
            <img src="/logo.png" alt="logo" />
        </div>
        <div className='flex flex-row justify-between items-center w-1/3 h-full'>
            <NavTitle title='Home' link='/'/>
            <NavTitle title='About' link='/'/>
            <NavTitle title='Contact' link='/'/>
            <NavTitle title='Service' link='/'/>
            <NavTitle title='Blog' link='/'/>
        </div>
        <div><Button /></div>
    </nav>
  )
}

export default Index