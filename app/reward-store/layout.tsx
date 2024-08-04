import Footer from "@/components/Footer";
import MobileMenu from "@/components/mobile-menu";
import Sidebar from "@/components/sidebar";
import AppNavbar from "@/components/ui/navbar";
import menu from "@/lib/menu";

export default function RewardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-full h-screen mx-auto flex items-center justify-center lg:gap-5 md:px-10 bg-light_bg">
            <div className="h-screen flex items-center">
                <Sidebar menu={menu} />
            </div>
            <MobileMenu />
            <div className="hidden lg:flex h-full border-r-2 border-separate border-light_solid border-dashed"></div>
            <div className="pt-5 flex flex-col items-center justify-between w-full text-secondary rounded-2xl h-screen overflow-y-scroll no-scroll">
                <AppNavbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}