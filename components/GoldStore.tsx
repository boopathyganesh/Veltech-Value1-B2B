import React from 'react'
import { gold } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import GoldStoreCard from './ui/GoldStoreCard';

const GoldStore = () => {
    return (
        <section className='w-full bg-light_bg text-secondary py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Gold Store</h2>
                </div>
                <div className='mt-10 '>
                    <div className='max-w-sm md:max-w-7xl mx-auto relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Gold Store</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-5'>
                            <Carousel>
                                <CarouselContent className='max-w-7xl flex px-4'>
                                    {gold.map((card, index) => (
                                        <CarouselItem key={index} className='basis-1/4'>
                                            <GoldStoreCard key={index} title={card.title} image={card.imageUrl} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='bg-light_solid text-secondary' />
                                <CarouselNext className='bg-light_solid text-secondary' />
                            </Carousel>
                        </div>
                        <button className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 bg-solid px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoldStore;
