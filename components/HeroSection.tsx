import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EnquiryForm from './Forms/Enquiry'

const HeroSection = () => {
    return (
        <section className='relative max-w-xs md:max-w-8xl w-full flex items-center justify-center my-5 rounded-2xl bg-primary overflow-hidden'>
            <div className='w-full h-[500px] flex items-start md:items-center justify-start bg-[url("/images/brand/campus.jpg")] bg-cover bg-no-repeat'>
                <div className='py-5 px-10 max-w-2xl w-full flex flex-col items-center md:items-start justify-center gap-4 bg-secondary/40'>
                    <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold text-primary">Earn 24K Gold with Every Transaction!</h1>
                    <p className='text-2xl text-tertiary font-medium'>Join the Exciting Revolution and Co-own the Leading Gold Rewards Platform at No Cost!</p>
                    <Link href={"/reward-store"} className='z-10 md:ml-10 bg-light_solid border-2 border-light_solid rounded-xl px-2 py-2 md:px-5 md:py-3 text-black-800 text-md md:text-xl font-medium cursor-pointer'>Join Now</Link>
                </div>
                <div className='w-full h-full flex items-center justify-end px-20'>
                    <EnquiryForm />
                </div>
            </div>

        </section>
    )
}

export default HeroSection
