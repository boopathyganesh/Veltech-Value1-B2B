import CustomCard from "@/components/ui/CustomCard";
import { data } from "@/context/data";

export default function AdminProfile() {
	return (
		<main className="flex flex-col text-gold-500 items-center justify-center gap-5">
			<div>
				<h1>Hi {"UserName"}</h1>
			</div>
			<div>
				<h1>Edit Profile</h1>
				<div>
					profile picture
					first last name
					email
					phone number
					address
					city state
					----------
					security --
					change password
					delete acc

				</div>
			</div>
		</main>
	);
}
