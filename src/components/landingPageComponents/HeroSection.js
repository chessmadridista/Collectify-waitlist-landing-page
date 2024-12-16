import MaxWidthWrapper from '../MaxWidthWrapper'
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

function HeroSection() {
    return (
        <section className='bg-blue-200'>
            <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pt-24 lg:pb-20">
                <div className="col-span-1 px-2 lg:px-0">
                    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-blue-500 text-5xl md:text-6xl">
                            <span className='text-blue-600'>Collectify</span> - Your Links, Perfectly Organized
                        </h1>

                        <p className="mt-8 text-balance text-lg max-w-prose text-center text-blue-800 font-semibold lg:pr-10 md:text-wrap lg:text-left">
                        Effortlessly collect, organize, and share your most important links in one neat collection.
                        </p>

                        <ul className="hidden mt-8 text-left font-medium md:flex flex-col items-center sm:items-start">
                            <div className="space-y-2">
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Save Time: Organize and share links without hassle.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Stay Organized: Keep track of important resources in one place.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Boost Collaboration: Share curated links with ease.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Enhanced Productivity: Spend less time searching for links and more time focusing on what matters.
                                </li>
                            </div>
                        </ul>
                        {/* CTA button */}
                        <Link target='_blank' href='https://app.youform.com/forms/ei2stxvq' className={cn(buttonVariants({ size: 'lg' }), "flex items-center justify-center mt-8 group")}>
                            <span>Get early access for $1/month</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>

                        {/* <div className="mt-12 flex flex-col sm:flex-row sm:items-start items-center gap-5">
                            <div className="flex -space-x-4">
                                <img src="/users/user-1.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                                <img src="/users/user-2.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                                <img src="/users/user-3.png" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                                <img src="/users/user-4.jpg" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                                <img src="/users/user-5.jpg" alt="user image" className="select-none pointer-events-none inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover" />
                            </div>

                            <div className="flex flex-col justify-between items-center sm:items-start">
                                <div className="flex gap-1">
                                    {Array(5).fill().map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>

                                <p><span className="font-semibold">5000+</span> happy users</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="col-span-full mt-14 md:mt-0 lg:col-span-1">
                    <div className="w-full h-60 lg:h-full rounded-3xl bg-gray-200/80 flex items-center justify-center overflow-hidden">
                        {/* <h1 className='text-center text-lg font-bold'>Your graphic</h1> */}
                        <img src="/mascots.jpg" alt="user" className="pointer-events-none object-cover w-full h-full" />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HeroSection