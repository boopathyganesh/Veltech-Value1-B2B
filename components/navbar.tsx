'use client'
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getEnvVar } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { sitemap } from "@/lib/map";

const Brand = process.env.NEXT_PUBLIC_BRAND_LOGO || "/images/logo-big.png"



const NavbarCustom = () => {

	const path = usePathname();
    let activeItem = sitemap.find(item => item.link === path);

	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between w-full h-28 py-5 px-20 bg-light_bg text-black border-b border-solid overflow-hidden">
			<div className="w-56 max-h-24 mx-5">
				<Image src={Brand} alt={""} height={500} width={500} className="w-full" />
			</div>
			<nav className="hidden md:flex items-center justify-center gap-5">
				<ul className="flex items-center justify-center gap-5">
					{siteConfig.navItems.map((item, index) => (
						<li className="font-medium text-lg hover:scale-105 hover:text-primary" key={index}><Link href={item.link}>{item.name}</Link></li>
					))}
				</ul>
				<div className="flex items-center justify-center gap-5">
					<Link className="font-medium px-5 py-3 bg-primary rounded-2xl hover:scale-105 hover:bg-solid smooth" href={"/login"}>Login</Link>
				</div>
			</nav>
		</nav>
	);
};

export default NavbarCustom;