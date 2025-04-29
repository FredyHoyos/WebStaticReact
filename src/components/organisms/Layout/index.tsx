import React, { ReactNode } from 'react'
import NavMovile from '@/components/molecules/NavMobile/index';
import Nav from '@/components/organisms/Nav/index';


const Index = ({children}: {children: ReactNode}) => {
  return (
    <div> 
        <div className='block lg:hidden'>
            <NavMovile/>
        </div>
        <div className='hidden lg:block'>
            <Nav/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Index;