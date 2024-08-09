"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DealsCard from './ui/DealsCard'
import Banner from './Banner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { brand } from '@/context/data';
import { fetchMerchants, Merchant } from '@/lib/INRDealService';


const OnlineDeals = () => {
    const [visibleItems, setVisibleItems] = useState(3); // Initial number of items to display
    const [activeTab, setActiveTab] = useState('top-brands'); // Initial active tab
    const [merchants, setMerchants] = useState<Merchant[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const getMerchants = async () => {
            try {
                const data = await fetchMerchants();
                setMerchants(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        getMerchants();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleViewMore = () => {
        if (visibleItems > 3 && activeTab === "trending-deals") {
            router.push("/reward-store/online-deals/trending-deals")
        }
        else if (visibleItems > 3 && activeTab === "top-brands") {
            router.push("/reward-store/online-deals/top-stores")
        }
        else {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Show 3 more items on each click
        }
    };

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        setVisibleItems(3); // Reset the number of visible items when the tab changes
    };


    return (
        <section className='w-full bg-light_bg text-secondary py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl text-center md:text-left font-bold">Online Deals</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <Banner />
                </div>
                <div className='mt-10 mb-5 md:mb-0'>
                    <div className="relative flex w-full flex-col">
                        <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                            {merchants.slice(0, visibleItems).map((card, index) => (
                                <DealsCard
                                    key={card.id}
                                    id={card.id.toString()}
                                    title={card.merchant}
                                    content={card.payout}
                                    image={card.logo}
                                />
                            ))}
                        </div>
                        {/* <button className='absolute -bottom-8 lg:top-0 lg:bottom-auto right-5 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button> */}
                        {(activeTab === 'top-brands' && visibleItems < brand.length) || (activeTab === 'trending-deals' && visibleItems < brand.length) ? (
                            <button
                                onClick={handleViewMore}
                                className='absolute -bottom-8 right-5 bg-solid px-3 py-2 rounded-2xl'
                            >
                                View More
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OnlineDeals
