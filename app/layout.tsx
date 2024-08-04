import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils"
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"font-sans antialiased",
					fontSans.variable
				)}
			>
				{/* <AuthProvider> */}
				<ReduxProvider>
					<div className="relative flex flex-col bg-light_bg text-secondary">
						<main className="flex-grow">
							{children}
						</main>
					</div>
				</ReduxProvider>
				{/* </AuthProvider> */}
			</body>
		</html>
	);
}
