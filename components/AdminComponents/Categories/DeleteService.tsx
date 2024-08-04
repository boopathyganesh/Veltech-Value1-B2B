"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

interface ModifyServicesProps {
    services: string;
}


export default function DeleteServices({ services }: ModifyServicesProps) {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false)
    }

    function handleSubmit() {
        console.log(services,"removed from DB!!!")
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-sm text-black font-medium p-2 bg-red-400 rounded-xl hover:scale-105 cursor-pointer">Delete</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Delete a Service</DialogTitle>
                    <DialogDescription className="font-medium text-orange-500">
                        Warning: By clicking the Delete button, the service and its subServices were removed permanently. Can&apos;t be reversed again!!!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <h1 className="text-xl font-medium">Are you sure to delete {services} permanently?</h1>
                </div>
                <DialogFooter className="flex items-center gap-5 w-full">
                    <button type="button" className=" text-white font-medium p-3 bg-black rounded-xl hover:scale-105 cursor-pointer" onClick={handleClose}>Close</button>
                    <button type="submit" className=" text-black font-medium p-3 bg-red-400 rounded-xl hover:scale-105 cursor-pointer" onClick={handleSubmit}>Delete</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
