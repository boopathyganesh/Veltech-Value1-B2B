"use client";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation';
import axios from "axios";

const SignInFormSchema = z.object({
    contact: z.string().min(10, "Contact number should be at least 10 digits")
        .refine(value => /^\d+$/.test(value), {
            message: "Contact number must be numeric",
        }),
});

const SignUpFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    organization: z.string().min(1, "Organization  is required"),
    email: z.string().email("Invalid email address"),
    contact: z.string().min(10, "Contact number should be at least 10 digits")
        .refine(value => /^\d+$/.test(value), {
            message: "Contact number must be numeric",
        }),
});

const OTPSchema = z.object({
    otp: z.string().length(6, "OTP should be 6 digits").refine(value => /^\d+$/.test(value), {
        message: "OTP must be numeric",
    }),
});

type SignInFormData = z.infer<typeof SignInFormSchema>;
type SignUpFormData = z.infer<typeof SignUpFormSchema>;
type OTPFormData = z.infer<typeof OTPSchema>;

export const LoginForm = () => {
    const [verify, setVerify] = useState<boolean>(false);
    const [userFound, setUserFound] = useState<boolean | null>(null);
    const [signInContact, setSignInContact] = useState<string>("");
    const [session, setSession] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        SignUpform.reset({
            ...SignUpform.getValues(),
            contact: signInContact,
        });
    }, [signInContact]);

    const SignInform = useForm<SignInFormData>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            contact: "",
        },
    });

    const SignUpform = useForm<SignUpFormData>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            organization: "",
            email: "",
            contact: signInContact,
        },
    });

    const OTPform = useForm<OTPFormData>({
        resolver: zodResolver(OTPSchema),
        defaultValues: {
            otp: "",
        },
    });

    interface Response {
        session?: string;
        message?: string;
        error?: string;
        // Include any other fields that may be returned by the API
    }

    async function CustomSignIn(phone_number: string): Promise<Response | null> {
        try {
            const response = await axios.post<Response>(`https://w63goktni6.execute-api.ap-south-1.amazonaws.com/Prod/auth/signin`, {
                phone_number: `+91${phone_number}`,
            });

            // Assuming the API returns a session if the sign-in is successful
            if (response.data && response.data.session) {
                return response.data;  // Return the session data or other relevant data
            } else if (response.data && response.data.error) {
                console.error("Sign-In Error:", response.data.error);
                return null;
            } else {
                console.error("Unexpected Response:", response.data);
                return null;
            }
        } catch (error) {
            console.error("Sign-In Request Failed:", error);
            return null;
        }
    }

    async function CustomSignUp(phone_number: string, firstname: string, lastname: string, email: string, organization: string): Promise<Response | any | null> {
        try {
            const response = await axios.post<Response>(`https://w63goktni6.execute-api.ap-south-1.amazonaws.com/Prod/auth/signup`, {
                phone_number: `+91${phone_number}`,
                firstname: firstname,
                lastname: lastname,
                email: email,
                organization: organization,
            });

            console.log("response da:",response)
            // Assuming the API returns a session or success message if sign-up is successful
            if (response.data && response.data.message) {
                return response.data; // Return session data or other relevant info
            }

        } catch (error) {
            console.error("Sign-Up Request Failed:", error);
            return error;
        }
    }

    const onSubmit = async (values: SignInFormData) => {
        const { contact } = values;
        setSignInContact(contact);

        // Sign in with NextAuth.js
        const result = await CustomSignIn(contact)

        console.log("signin result:", result)

        if (result?.session) {
            setSession(result.session)
            setUserFound(true);
        } else {
            setUserFound(false);
        }
    };

    const onSignUpSubmit = async (values: SignUpFormData) => {
        const { contact, firstName, lastName, email, organization } = values;

        // Sign up with NextAuth.js
        const result = await CustomSignUp(contact,firstName,lastName,email,organization)

        console.log("signup result:", result)
        //console.log("Erroringo",result?.response.data.error)

        if (result?.message) {
            console.log(result?.message)
            router.push("/auth")
        }
        else {
            console.error("Error while registering you data")
            console.log("Erroringo",result?.response.data.error)
            alert(result?.response.data.error)
            setUserFound(false);
        }
    };

    const onOTPSubmit = async (values: OTPFormData) => {
        const { otp } = values;

        // Verify OTP with NextAuth.js
        const result = await signIn('credentials', {
            redirect: false,
            otp,
            phone_number: signInContact,
            session: session
        });

        if (result?.ok) {
            router.push("/reward-store");
        } else {
            // Handle OTP verification failure
            console.log("OTP verification failed");
        }
    };

    return (
        <div className="w-full flex flex-col items-start justify-start max-h-[320px] overflow-scroll">
            {userFound === null && (
                <Form {...SignInform}>
                    <form onSubmit={SignInform.handleSubmit(onSubmit)} method='post' className="w-full flex flex-col items-center justify-start gap-4">
                        <FormField
                            control={SignInform.control}
                            name="contact"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your Registered Mobile No." {...field} type='number' maxLength={10} className='w-96' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='bg-solid font-semibold w-max text-secondary'>Next</Button>
                    </form>
                </Form>
            )}

            {userFound === false && (
                <Form {...SignUpform}>
                    <form onSubmit={SignUpform.handleSubmit(onSignUpSubmit)} method='post' className="w-full flex flex-col items-center justify-start gap-4">
                        <div className='flex flex-col items-center justify-start gap-5 px-4'>
                            <FormField
                                control={SignUpform.control}
                                name="contact"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Mobile Number" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your First Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Last Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="organization"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Organization</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Organization Name" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={SignUpform.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Email" {...field} className='w-96' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='bg-solid font-semibold w-max text-secondary'>Next</Button>
                        </div>
                    </form>
                </Form>
            )}

            {userFound && (
                <Form {...OTPform}>
                    <form onSubmit={OTPform.handleSubmit(onOTPSubmit)} method='post' className="w-full flex flex-col items-center justify-center">
                        <div className='flex flex-col items-center justify-center gap-5 px-4'>
                            <FormField
                                control={OTPform.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>OTP</FormLabel>
                                        <FormControl>
                                            <div className='w-96 flex items-center justify-center'>
                                                <InputOTP maxLength={6} {...field}>
                                                    <InputOTPGroup {...field}>
                                                        <InputOTPSlot index={0} />
                                                        <InputOTPSlot index={1} />
                                                        <InputOTPSlot index={2} />
                                                        <InputOTPSlot index={3} />
                                                        <InputOTPSlot index={4} />
                                                        <InputOTPSlot index={5} />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='bg-solid font-semibold w-max text-secondary'>Verify</Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    );
};
