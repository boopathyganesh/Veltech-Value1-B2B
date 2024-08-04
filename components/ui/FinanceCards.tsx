import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    content: string;
    image: string | StaticImageData;
    link: string
}

const FinanceCard = ({ title, content, image, link }: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-between w-72 h-56 bg-solid/20 text-secondary rounded-2xl overflow-hidden'>
            <div className='flex flex-col items-start justify-between h-full text-tertiary p-5'>
                <div className='flex flex-col items-center justify-start gap-2 '>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-16 h-16 rounded-full flex items-center justify-center bg-light_bg overflow-hidden'>
                            <Image src={image} alt={""} height={500} width={500} />
                        </div>
                        <h1 className='text-lg font-medium w-44 text-secondary'>{title}</h1>
                    </div>
                    <p className='text-secondary/70 text-sm'>{content}</p>
                </div>
                <a href={link} className='mt-3 p-2 bg-primary text-secondary rounded-lg'>Apply Now</a>
            </div>
        </div>
    )
}

export default FinanceCard
