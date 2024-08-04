import CoOwners from "@/components/AdminComponents/Dashboard/Co-Owners";
import Corporates from "@/components/AdminComponents/Dashboard/Corporates";
import Transactions from "@/components/AdminComponents/Dashboard/Transactions";
import Users from "@/components/AdminComponents/Dashboard/Users";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center text-white w-full">
			<div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 items-center justify-center gap-5">
				<Users totalUsers={590} growth={20} />
				<Transactions totalTxn={1258436} growth={52} />
				<Corporates totalUsers={26} growth={-7} />
				<CoOwners totalCoOwners={276} growth={80}  />
			</div>
		</main>
	);
}
