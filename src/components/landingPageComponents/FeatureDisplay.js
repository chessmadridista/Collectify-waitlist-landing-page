import { Sparkle, } from 'lucide-react';

function FeatureDisplay() {
    return (
        <section className="bg-slate-50 py-24 pb-16">
            <div className='max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-4'>
                <h2 className='tracking-tight font-bold text-center md:text-left text-3xl lg:text-5xl lg:leading-[3.5rem] text-blue-500'>
                    Simplify Your Workflow
                </h2>
                <p className='font-semibold my-4 text-center md:text-left text-gray-700'>
                    Effortlessly collect, organize, and share links—your digital life, perfectly streamlined.
                </p>

                <div className='flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 mt-4'>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Feature One</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Feature Two</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Feature Three</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Feature Four</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureDisplay