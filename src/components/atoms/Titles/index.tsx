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

const SubTitle = () => {
    return (
      <h3 className='text-center lg:text-left text-xl lg:text-[24px] font-light text-secondary'>
        Simple Budgeting</h3>
    )
}

const TextTitle = () => {
    return (
      <h3 className='text-center lg:text-left text-lg font-light text-secondary'>
        Receive money in any currency with no fees</h3>
    )
}
const SubText = ({text}:{text: string }) => {
    return (
      <h3 className='text-base text-gris font-light text-center lg:text-left max-w-72 lg:max-w-96'>
        {text}
      </h3>
    )
}

export {HeroTitle, MidiumTitle, SubTitle, TextTitle, SubText}