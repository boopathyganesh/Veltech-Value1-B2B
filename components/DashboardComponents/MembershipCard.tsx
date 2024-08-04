import { planDetails } from '@/context/data';
import React from 'react'

interface PlanCardProps {
    plan: string;
    price: string | number;
    description: string;
    features: {
        icon: string;
        content: string;
    }[];
}

const PlanCard = ({ plan, price, description, features }: PlanCardProps) => {
    return (
        <div>
            <span>{plan}</span>
            <div>
                <h1>{price}</h1>
                <p>{description}</p>
            </div>
            <ul>
                {features.map((item, index) => (
                    <li key={index}>
                        <span>{item.icon}</span>
                        <span>{item.content}</span>
                    </li>
                ))}
            </ul>
            <button>{plan === "CoOwn" ? "Learn More" : "Book for Trial"}</button>
        </div>
    );
};

const MembershipCard = () => {
    return (
        <section className='max-w-5xl w-full h-full flex flex-col items-center justify-start'>
            <h1 className='text-4xl font-medium max-w-sm w-full text-center'>Choose the plan that fits your needs</h1>
            <div className='flex items-center justify-center my-10'>
                {planDetails.map((plan, index) => (
                    <PlanCard key={index} plan={plan.plan} price={plan.price} description={plan.description} features={plan.features} />
                ))}
            </div>
        </section>
    )
}

export default MembershipCard
