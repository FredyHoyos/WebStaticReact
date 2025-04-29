import React from 'react'

const HeroTitle = () => {
  return (
    <div>
      <h1 className='text-center lg:text-left text-[40px] lg:text-[56px] font-light text-secondary max-w-72 lg:max-w-96'>
        Next generation digital banking
      </h1>
    </div>
  )
}

const MidiumTitle = () => {
    return (
      <h2 className='text-center lg:text-left text-[32px] lg:text-[40px] font-light text-secondary max-w-72 lg:max-w-max'>
        Why choose Easybank?
      </h2>
    )
}

const SubTitle = ({title}:{title: string }) => {
    return (
      <h3 className='text-start lg:text-left text-xl lg:text-[16px] font-light text-secondary'>
        {title}</h3>
    )
}

const TextTitle = ({text}:{text: string }) => {
    return (
      <h3 className='text-center lg:text-left text-lg font-light text-secondary'>
        {text}</h3>
    )
}
const SubText = ({text}:{text: string }) => {
    return (
    <div>
      <p className='text-base text-gris font-light text-start lg:text-left max-w-72 lg:max-w-72'>
      {text}</p>
    </div>
    )
}

export {HeroTitle, MidiumTitle, SubTitle, TextTitle, SubText}