"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MultiSelect from "./MultiInput"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

interface ModifyServicesProps {
    services: string;
    subService: string[];
}


export default function ModifyServices({ services, subService }: ModifyServicesProps) {
    const [multiSelectValues, setMultiSelectValues] = useState<string[]>(subService);
    const [serviceName, setServiceName] = useState<string>(services);
    const [open, setOpen] = useState(false);

    const handleMultiSelectChange = (items: string[]) => {
        setMultiSelectValues(items);
        console.log('MultiSelect Values:', items);
    };
    function handleSubmit() {
        console.log({
            serviceName,
            subServices: multiSelectValues,
        });
        setOpen(false)

    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-sm text-black font-medium p-2 bg-gold-200 rounded-xl hover:scale-105 cursor-pointer">Modify</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Modify Service</DialogTitle>
                    <DialogDescription>
                        Modify the &ldquo; {serviceName} &rdquo; Service
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center justify-start gap-2">
                        <Label htmlFor="name" className="text-left">
                            Service Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Service 1"
                            className="focus:border-gold-300"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Sub Service Name
                        </Label>
                        <MultiSelect value={multiSelectValues} onChange={handleMultiSelectChange} id="SSName" className="border-gold-200 rounded" inputClassName="w-full border-gold-200 rounded focus:border-gold-300" />
                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
