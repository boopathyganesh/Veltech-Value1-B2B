import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import ProfileForm from "../Forms/ProfileForm"
import { useState } from "react"
import KYCForm from "../Forms/KYCForm"
import PdfViewer from "./PdfViewer"

export function ProfileComponent() {
    const [block, setBlock] = useState<boolean>(true)
    function handleEditBtn() {
        setBlock(prevBlock => !prevBlock);
    }
    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Profile Space</h1>
                </div>
                <div className="flex items-center justify-center">
                    <Tabs defaultValue="profile" className="flex flex-col items-center justify-center w-full">
                        <TabsList className="max-w-4xl mx-auto">
                            <TabsTrigger value="profile">
                                <span>Profile</span>
                            </TabsTrigger>
                            <TabsTrigger value="kyc">
                                <span>KYC Details</span>
                            </TabsTrigger>
                            <TabsTrigger value="grantletter">
                                <span>GrantLetter</span>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile" className="w-full">
                            <div className="w-full flex items-center justify-center gap-5 text-secondary h-[550px] rounded p-2">
                                <div className="w-1/3 h-full flex flex-col items-center justify-center gap-3">
                                    <div className="w-32 h-32 p-2 rounded-full border-2 border-primary overflow-hidden">
                                        <Image src={"/images/mr.dummy.png"} alt={""} height={500} width={500} className="w-full" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-2xl font-medium">{"Mr.Dummy"}</h1>
                                        <p className="text-lg">{"mr.dummy@gmail.com"}</p>
                                        <span className="text-primary text-xl font-medium">{"Co-Own"}</span>
                                    </div>
                                    <button onClick={handleEditBtn} className='w-max px-4 py-3 rounded-2xl bg-primary font-medium'>Edit Profile</button>
                                </div>
                                <div className="w-2/3 h-[500px] flex items-start justify-center overflow-scroll pt-5">
                                    <ProfileForm disabled={block} />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="kyc" className="w-full">
                            <div className="w-full flex items-center justify-center gap-5 text-secondary h-[550px] rounded p-2">
                                <KYCForm disabled={false} />
                            </div>
                        </TabsContent>
                        <TabsContent value="grantletter" className="w-full">
                            <div className="w-full flex items-center justify-center gap-5 text-secondary h-[600px] rounded p-2">
                                <PdfViewer link="/pdf/GrantLetter-sample.pdf" />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}
