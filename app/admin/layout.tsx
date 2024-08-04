import Footer from "@/components/Footer";
import MobileMenu from "@/components/mobile-menu";
import Sidebar from "@/components/sidebar";
import AppNavbar from "@/components/ui/navbar";
import adminMap from "@/lib/admin-map";


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-full h-screen mx-auto flex items-center justify-center lg:gap-5 md:px-10 ">
            <div className="h-screen flex items-center">
                <Sidebar menu={adminMap} />
            </div>
            <MobileMenu />
            <div className="hidden lg:flex h-full border-r-2 border-separate border-gold-300 border-dashed"></div>
            <div className="pt-5 flex flex-col items-center justify-between w-full text-black-500 rounded-2xl h-screen overflow-y-scroll no-scroll">
                <AppNavbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}