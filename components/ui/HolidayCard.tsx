import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    content: string;
    image: string | StaticImageData;
    rating: number;
    price?: number;
}

const HolidayCard = ({ title, content, image, rating, price }: CardProps) => {
    
    return (
        <div className='flex flex-col items-center justify-between w-72 h-[400px] bg-dark_bg/10 text-secondary rounded-2xl overflow-hidden'>
            <div className='flex items-center justify-center h-1/2'>
                <Image src={image} alt={title} width={800} height={800} className='h-full w-auto ' />
            </div>
            <div className='flex flex-col items-start justify-start gap-1.5 p-4 w-full h-1/2'>
                <h1 className='text-lg font-medium text-secondary line-clamp-2'>{title}</h1>
                <span className='flex items-center justify-center'>
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-solid' : 'text-gray-400'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                    ))}
                    <span className='ml-1'>({rating}/5)</span>
                </span>
                <span className='font-bold text-lg'>{formatCurrency(price)}/person</span>
                <Link href={'/services/holidays'} className='px-5 py-3 textblack bg-primary rounded-xl'>Enquire Now!</Link>
            </div>
        </div>
    )
}

export default HolidayCard
