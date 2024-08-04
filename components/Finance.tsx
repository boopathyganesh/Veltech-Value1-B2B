'use client'

import React from 'react'
import CustomCard from './ui/CustomCard'
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdCard from './ui/adCards';
import { data, loans } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FinanceCard from './ui/FinanceCards';


const Finance = () => {
    return (
        <section className='w-full bg-light_bg text-secondary py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto bg-light_bg p-5 md:px-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Financial Services</h2>
                </div>
                <div className='max-w-sm md:max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between my-10 md:my-16 bg-solid/10 p-4 rounded-xl'>
                    <div className='md:w-1/2 my-5 rounded-3xl overflow-hidden'>
                        <Image src={'/images/Asset-013.jpg'} alt={''} width={800} height={800} className='w-full h-auto' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-4xl font-bold text-center'>Unlock Exclusive Financial Perks and <span className='text-light_solid'>Gold Rewards!</span></h1>
                        <h2 className='text-2xl font-medium text-center'>Craft Wealth, Unleash Dreams, and Enjoy Top-tier Support!</h2>
                        <button></button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className="relative flex w-full flex-col mb-5 md:mb-0">
                        <Tabs defaultValue="loans" className="w-full flex flex-col items-center justify-center">
                            <TabsList className='md:ml-20'>
                                <TabsTrigger value="loans">Loans</TabsTrigger>
                                <TabsTrigger value="insurance">Insurance</TabsTrigger>
                                <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
                                <TabsTrigger value="capital-market">Capital Market</TabsTrigger>
                            </TabsList>
                            <TabsContent value="loans">
                                <div className='flex-wrap items-center justify-center py-4'>
                                    <Carousel>
                                        <CarouselContent className='max-w-7xl flex px-4'>
                                            {loans.map((card, index) => (
                                                <CarouselItem key={index} className='basis-1/4'>
                                                    <FinanceCard key={index} title={card.title} content={card.content} image={card.image} link={card.link} />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className='bg-light_solid text-secondary' />
                                        <CarouselNext className='bg-light_solid text-secondary' />
                                    </Carousel>
                                </div>
                            </TabsContent>
                            <TabsContent value="insurance">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {loans.map((card, index) => (
                                        <FinanceCard key={index} title={card.title} content={card.content} image={card.image} link={card.link} />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="credit-cards">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {loans.map((card, index) => (
                                        <FinanceCard key={index} title={card.title} content={card.content} image={card.image} link={card.link} />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="capital-market">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {loans.map((card, index) => (
                                        <FinanceCard key={index} title={card.title} content={card.content} image={card.image} link={card.link} />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                        <button className='absolute -bottom-8 lg:top-0 lg:bottom-auto right-5 bg-solid px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Finance
