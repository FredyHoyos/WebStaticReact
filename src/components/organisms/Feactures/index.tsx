import React from 'react'
import Card from '@/components/molecules/Card'

const feacture = [
  {
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    icon: 'material-symbols:online-prediction',
    },
    {
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    icon: 'material-symbols:close',
    },
    {
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    icon: 'material-symbols:money-bag-outline-rounded',
    },
    {
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    icon: 'material-symbols:menu',
    },
]
const Index = () => {
  return (
    <div className='flex flex-row items-center justify-around grap-5'>
        {feacture.map((feacture) => (
            <Card 
            key={feacture.title}
            title={feacture.title}
            text={feacture.text}
            icon={feacture.icon}/>
        ))}

    </div>
  )
}

export default Index