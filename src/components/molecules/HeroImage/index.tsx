import React from 'react'

const Index = () => {
  return (
    <div className='relative lg:w-max w-[100%]'>
        <div className='absolute -z-12 -top-20 right-0'>
            <img src='/Hero1.png' alt='hero1'/>
        </div>
        <div className='absolute -z-13 -top-20 right-0'>
            <img src='/Hero2.png' alt='hero2'/>
        </div>
        <div className='relative -z-9 flex flex-col items-center h-max-200 lg:w-max'>
            <picture>
              <source srcSet="/Hero3.png" media="(min-width: 1024px)" />
              <img src="/Hero3-1.png" alt="hero3" className='-mt-15' />
            </picture>
        </div>
    </div>
  )
}

export default Index