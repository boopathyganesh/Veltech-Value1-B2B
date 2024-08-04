import React from 'react'
import Image from 'next/image';
import { overseas, v_brands } from '@/context/data';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import VBrandCard from './ui/VBrandCard';

const ValueBrands = () => {
    return (
        <section className='w-full bg-light_bg text-secondary py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:px-10 rounded-2xl bg-light_bg'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Value Brands</h2>
                    <div className='mt-10 pt-5 md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-primary flex flex-col md:flex-row items-center justify-start md:justify-end md:pr-20 gap-3 md:gap-10 h-64 rounded-3xl'>
                        <div className='flex flex-col md:flex-row items-center justify-center' >
                            <Image className='absolute bottom-0 right-0 md:left-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
                            <h1 className='text-center md:text-right text-2xl font-semibold text-secondary'>Planning for a Trip?</h1>
                        </div>
                        <div className='hidden md:flex h-10 border-l border-tertiary/80'></div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5'>
                            <p className='text-xl font-medium'>Find everything your need to start.</p>
                            <a href='/reward-store/travel/bus-booking' className='bg-light_bg text-secondary px-3 py-2 rounded-3xl'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Value Brands</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                            <Carousel>
                                <CarouselContent className='max-w-7xl flex px-4'>
                                    {v_brands.map((card, index) => (
                                        <CarouselItem key={index} className='basis-1/3'>
                                            <VBrandCard key={index} title={card.title} image={card.imageUrl} offer={card.offer} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {v_brands.length > 3 && (
                                    <>
                                        <CarouselPrevious className='bg-light_solid text-secondary' />
                                        <CarouselNext className='bg-light_solid text-secondary' />
                                    </>
                                )}
                            </Carousel>
                        </div>
                        <div className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 flex items-center justify-center gap-5'>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Default(Chennai)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Chennai">Chennai</SelectItem>
                                    <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                                    <SelectItem value="Madurai">Madurai</SelectItem>
                                    <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                                    <SelectItem value="Tuticorin">Tuticorin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ValueBrands;
