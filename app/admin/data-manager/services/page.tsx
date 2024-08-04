"use client"
import AddServices from "@/components/AdminComponents/Categories/AddServices";
import CustomCheckbox from "@/components/AdminComponents/Categories/CustomCheckbox";
import DeleteServices from "@/components/AdminComponents/Categories/DeleteService";
import ModifyServices from "@/components/AdminComponents/Categories/ModifyServices";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

const invoices = [
	{
		Service: "Test1",
		SubService: ["SS1", "ss2", "ss3", "ss4", "ss5"],
		State: true,
		isDelete: false,
	},
	{
		Service: "Test1",
		SubService: ["Paid", "Paid", "Paid", "Paid", "Paid"],
		State: true,
		isDelete: false,
	},
	{
		Service: "Test1",
		SubService: ["Paid", "Paid", "Paid", "Paid", "Paid"],
		State: true,
		isDelete: false,
	},
	{
		Service: "Test1",
		SubService: ["Paid", "Paid", "Paid", "Paid", "Paid"],
		State: true,
		isDelete: false,
	},
	{
		Service: "Test1",
		SubService: ["Paid", "Paid", "Paid", "Paid", "Paid"],
		State: false,
		isDelete: false,
	},
	{
		Service: "Test1",
		SubService: ["Paid", "Paid", "Paid", "Paid", "Paid"],
		State: true,
		isDelete: false,
	},
]



export default function Categories() {
	const [isActive,setIsActive] = useState<boolean>();
	function handleCheckedChange(state:boolean){
		setIsActive(state)
	}
	return (
		<main className="flex flex-col text-white items-center justify-center gap-5 w-full">
			<div className="w-full px-5">
				<h2 className="text-3xl text-gold-200 font-semibold mb-5">Manage Services</h2>
				<div className="flex flex-col items-center justify-center w-full">
					<div className="flex items-center justify-between w-full px-10">
						<h3 className="text-xl font-medium">List of Available Services and Sub Services</h3>
						<AddServices />
					</div>
					<div className='max-w-6xl p-2 w-full border rounded mt-5 bg-white/15'>
						<div className="h-full p-4 max-h-[500px] overflow-y-scroll">
							<Table>
								<TableHeader className="text-center" >
									<TableRow>
										<TableHead className="text-center text-gold-200 w-[100px]">S.No</TableHead>
										<TableHead className="text-center text-gold-200">Service</TableHead>
										<TableHead className="text-center text-gold-200">Sub Services</TableHead>
										<TableHead className="text-center text-gold-200 w-36">State</TableHead>
										<TableHead className="text-center text-gold-200 w-32">Modify</TableHead>
										<TableHead className="text-center text-gold-200 w-32">Delete Service</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="text-center">
									{invoices.map((item, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{index + 1}</TableCell>
											<TableCell className="font-medium text-lg">{item.Service}</TableCell>
											<TableCell className="text-center">
												<ul>
													{item.SubService.map((sub, index) => (
														<li className="text-base font-medium" key={index}>{sub}</li>
													))}
												</ul>
											</TableCell>
											<TableCell className="space-x-2 flex items-center justify-center h-36">
												<CustomCheckbox isServiceActive={item.State} />
												<label
													htmlFor="isActive"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Is Active
												</label>
											</TableCell>
											<TableCell><ModifyServices services={item.Service} subService={item.SubService} /></TableCell>
											<TableCell><DeleteServices services={item.Service} /></TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div>
					{/* <Table>
						<TableCaption>A list of your recent invoices.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{invoices.map((invoice) => (
								<TableRow key={invoice.invoice}>
									<TableCell className="font-medium">{invoice.invoice}</TableCell>
									<TableCell>{invoice.paymentStatus}</TableCell>
									<TableCell>{invoice.paymentMethod}</TableCell>
									<TableCell className="text-right">{invoice.totalAmount}</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Total</TableCell>
								<TableCell className="text-right">$2,500.00</TableCell>
							</TableRow>
						</TableFooter>
					</Table> */}
				</div>
			</div>
		</main>
	);
}
