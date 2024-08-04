'use client'
import { brand } from "@/context/data"
import DealsCard from "@/components/ui/DealsCard";
import DealsCategory from "@/components/DealsCategory";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedBadge } from '@/store/selectors/selectedBadgeSelector';
import StoreDetail from "@/components/DashboardComponents/StoreDetail";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { setActiveLink } from "@/store/slices/activeLinkSlice";

export default function Store({ params }: { params: { id: string } }) {

	// const selectedBadge = useSelector(selectSelectedBadge);
	// if (!selectedBadge) {
	// 	return <main>Error in Fetching Deal Categories</main>
	// }

	const pathname = usePathname();
    const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(setActiveLink(pathname));
	})

	const filteredCard = brand.find((card) => card.id === params.id);
	return (
		<main className="flex flex-col text-solid items-center justify-center gap-5 mt-2 w-full">
			<div className='flex flex-wrap items-start justify-center gap-2 max-w-7xl w-full'>
				<div className="w-full pl-10">
					<h2 className="text-2xl font-semibold">{filteredCard?.title}</h2>
				</div>
				<div className="w-full pl-10">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Online Deals</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{filteredCard?.title}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="flex flex-wrap items-start justify-center w-full">
					{filteredCard !== undefined ? (
						<StoreDetail key={filteredCard.id} id={filteredCard.id} title={filteredCard.title} content={filteredCard.content} image={filteredCard.imageUrl} category={filteredCard.category} />
					) : (
						<div>No deals Found</div>
					)}
				</div>
			</div>
		</main>
	);
}