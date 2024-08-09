import CoOwnJourney from "@/components/DashboardComponents/CoOwnJourney";
import History from "@/components/DashboardComponents/History";
import Evaluation from "@/components/DashboardComponents/Evaluvation";
import GoldReward from "@/components/DashboardComponents/GoldReward"
import Membership from "@/components/DashboardComponents/Membership";
import ValueCoins from "@/components/DashboardComponents/ValueCoins";
import Tracking from "@/components/DashboardComponents/Tracking";
import ThoughtShared from "@/components/DashboardComponents/ThoughtShared";
import GrantLetterViewer from "@/components/DashboardComponents/GrantLetterViewer";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center text-secondary w-full">
			<div className="flex items-center justify-center w-full p-4 h-58 gap-5">
				<div className="flex items-center justify-center w-full gap-3">
					<div className="flex items-start justify-center gap-5">
						<GoldReward />
						<ValueCoins />
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<Membership />
						{/* <GrantLetterViewer /> */}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-full p-4 gap-5">
				<Evaluation />
				<CoOwnJourney />
				<ThoughtShared />
			</div>
			<div className="flex items-center justify-center w-full p-4 gap-5">
				<History />
				<Tracking />
			</div>
		</main>
	);
}
