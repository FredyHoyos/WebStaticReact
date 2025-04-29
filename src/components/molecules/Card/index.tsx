import React from 'react'
import Icon from "@/components/atoms/Icon";
import { SubText,SubTitle } from '@/components/atoms/Titles'

const Index = ({title='',text='',icon='material-symbols:online-prediction',}:{title: string; text: string; icon: string;}) => {
  return (
    <div className='flex flex-col items-start justify-center w-full gap-6'>
        <Icon icon={icon}/>  
        <SubTitle title={title}/>
        <SubText text={text}/>
    </div>
  )
}

export default Index