import React from 'react'
import {Icon} from '@iconify/react'


const index = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-16 bg-white shadow-md p-5'>
        <div>  
            <img src="/logo.png" alt="logo"/>
        </div>
        <div>
            <button className='hover:cursor-pointer hover:bg-gray-200 text-secondary hover:text-primary'>
                <Icon icon='material-symbols:menu-rounded' width='24' height='24'/>
            </button>
            <div>
                <Icon icon='material-symbols:close-rounded' width='24' height='24'/>
            </div>
        </div>
    </div>
  )
}

export default index