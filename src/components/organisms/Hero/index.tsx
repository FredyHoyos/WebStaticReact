import React from 'react'
import HeroTitle from "@/components/molecules/HeroMolecule";
import HeroImage from "@/components/molecules/HeroImage";


const Index = () => {
  return (
    <div className='lg:flex lg:flex-row-reverse justify-between '>
      <HeroImage/>
        <div className='lg:w-1/3 flex flex-col gap-5 items-center justify-center p-10'>
            <HeroTitle/>
        </div>
    </div>
  )
}

export default Index