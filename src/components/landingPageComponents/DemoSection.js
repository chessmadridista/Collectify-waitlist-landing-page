import { ChevronDown } from 'lucide-react';

function DemoSection() {
    return (
        <section className='bg-white/80 py-20'>
            <div className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-700">
                <h1 className='font-bold text-3xl text-center text-blue-400'>Hey there, it's <a href='https://x.com/HairunHuang' target="_blank" rel="noopener noreferrer" className='hover:underline hover:underline-offset-2'>Lavanya</a>👋🏼</h1>
                <img src="/users/user.png" alt="user" className="inline-block pointer-events-none w-24 h-24 rounded-full my-10 object-cover" />
                <p className='max-w-prose w-fit text-center font-semibold leading-relaxed'>
                I created this app because I was tired of the hassle of sharing multiple links individually. Copy-pasting links repeatedly was time-consuming, messy, and prone to errors. I wanted a simple solution to group all related links into one collection and share just a single link. This app streamlines that process—allowing users to organize links effortlessly, generate a shareable link, and save time while keeping everything neat and accessible.
                </p>

                {/* demo video */}
                <div className='my-20 scroll-mt-28 w-full' id='demo'>
                    <div className='w-full lg:w-4/5 lg:mx-auto h-72 lg:h-96 shadow-md bg-gray-200 rounded-xl flex items-center justify-center'>
                        <h1 className="font-bold text-xl">
                            Your Demo
                        </h1>
                    </div>
                </div>

                <div className='flex items-center justify-center mb-4'>
                    <ChevronDown className='animate-bounce w-10 h-10 text-gray-600' />
                </div>

                <div className='font-medium text-center text-2xl text-blue-500 hover:text-blue-600 cursor-pointer'>
                    Try it now
                </div>
            </div>
        </section>
    )
}

export default DemoSection