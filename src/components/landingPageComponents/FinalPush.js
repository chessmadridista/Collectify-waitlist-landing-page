import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import { buttonVariants } from "../ui/button";

function FinalPush() {
    return (
        <section className='pt-40 pb-32 px-5' id='contact'>
            <div className='flex flex-col md:flex-row max-w-5xl mx-auto px-14 py-10 gap-10 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 rounded-3xl'>
                <div className="space-y-6">
                    <h2 className='relative tracking-tight font-bold text-3xl md:text-4xl text-blue-800'>
                        <span className='absolute top-[-20px] right-0'>
                            <IoIosRocket className='h-10 w-10 text-sky-900' />
                        </span>
                        Make Your Life Easier, One Link at a Time
                    </h2>

                    <p className='text-lg font-medium leading-relaxed text-gray-700'>
                    Ready to streamline how you save and share links? Our app helps you organize your important links into beautiful collections and share them effortlessly. Say goodbye to digital clutter and hello to simplicity! 
                    Take the first step toward a more organized, stress-free experience today.
                    </p>

                    <div className="w-full lg:w-1/4">
                        <Link href='/' className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-4")}>
                            <span>Try out the app</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalPush