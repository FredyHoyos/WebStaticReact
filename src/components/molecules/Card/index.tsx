import React from 'react'
import {Icon} from '@iconify/react'
import { SubText,SubTitle } from '@/components/atoms/Titles'

const Index = () => {
  return (
    <div>
        <div className='gradient rounded-full w-20 h-20 flex justify-center items-center'>
            <Icon icon="material-symbols:add-card-outline" width="40" height="40" className='text-white'/>      
        </div>
        <SubTitle/>
        <SubText text='lorem'/>
    </div>
  )
}

export default Index