import React from 'react'
import { FaCrown , FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

interface CardProps {
  totalCoOwners: number;
  growth: number;
}

const CoOwners = ({ totalCoOwners, growth }: CardProps) => {
  return (
    <div className='bg-white/15 flex flex-col items-center justify-center w-80 p-5 gap-5 rounded-xl text-white'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='font-semibold text-xl'>Total Co-Owners</h1>
        <FaCrown  className='text-gold-500 text-3xl' />
      </div>
      <div className='flex flex-col items-start justify-center w-full'>
        <h1 className='text-4xl font-bold text-gold-200'> {totalCoOwners||0}</h1>
        <div className='flex items-center justify-center gap-1'>
          {growth >= 0 && (
            <FaArrowTrendUp className='text-green-600' />
          )}
          {growth < 0 && (
            <FaArrowTrendDown className='text-red-600'/>
          )}
          <p>{growth!=0 && growth>0 ? "+":""}{growth||0}% from last month</p>
        </div>

      </div>
    </div>
  )
}

export default CoOwners
