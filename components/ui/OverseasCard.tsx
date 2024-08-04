import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    image: string;
}

const OverseasCard = ({ title,image}: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-between w-[500px] h-[300px] bg-dark_bg/10 text-tertiary rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}>
            <div className='flex items-center justify-center gap-1.5 bg-dark_bg/30 p-5 h-full w-full'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </div>
    )
}
export default OverseasCard
