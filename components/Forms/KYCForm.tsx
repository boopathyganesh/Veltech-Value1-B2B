"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

interface KYCFormProps {
    disabled: boolean;
}

const formSchema = z.object({
    pan: z.string().min(10, "Invalid PAN Number").max(10,"Invalid PAN Number"),
});

type FormData = z.infer<typeof formSchema>;

const KYCForm = ({ disabled }: KYCFormProps) => {

    const [panSts, setPanSts] = useState<string>("Verify")

    function isValidPanCardNo(panCardNo: string) {
        setPanSts("Verifying")
        let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
        if (panCardNo == null) {
            return false;
        }
        if (regex.test(panCardNo) == true) {
            return true;
        }
        else {
            return true;
        }
    }

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pan: ""
        },
    })

    function onSubmit(values: FormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        if (isValidPanCardNo(values.pan)) {
            setPanSts("Verified")
            console.log(values)
            console.log("PAN Verified Successfully")
        }
        else {
            setPanSts("Verify")
            console.log("PAN Verification Failed")
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96 flex flex-col items-center justify-center" method='post'>
                    <FormField
                        control={form.control}
                        name="pan"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>PAN Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="GO**C9**1H" {...field} className='w-96' disabled={disabled} maxLength={10} />
                                </FormControl>
                                <FormDescription>Your PAN Data will verified as per RBI Guidelines</FormDescription>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />
                    <Button disabled={disabled || panSts === "Verified" ? true : false} type="submit" className='bg-gold-200 text-black font-semibold w-max'>{panSts}</Button>
                </form>
            </Form>
        </div >
    )
}

export default KYCForm;
