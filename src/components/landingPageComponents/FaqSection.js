'use client'
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
            <div className="flex justify-between items-center cursor-pointer text-gray-700" onClick={() => {
                setIsOpen(!isOpen);
            }}>
                <h2 className={`text-xl font-semibold ${isOpen ? 'text-black' : ''}`}>{question}</h2>
                <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
                    "-rotate-180": isOpen
                })} />
            </div>
            {isOpen && <p className='mt-3 leading-relaxed'>{answer}</p>}
        </div>
    );
};


function FaqSection() {
    const faqs = [
        {
            question: "What is this app used for?",
            answer: "This app helps you organize multiple links into a single collection and share them using one convenient link."
        },
        {
            question: "How do I create a collection?",
            answer: "Simply add your links, customize your collection’s name and description, and save it. Your collection will generate a unique shareable link."
        },
        {
            question: "Can I edit my collections after creating them?",
            answer: "Yes, you can update or delete links in a collection and even change the collection's name or description anytime."
        },
        {
            question: "Is there a limit to the number of links I can add to a collection?",
            answer: "No, you can add as many links as you want to a collection, making it perfect for any use case."
        },
        {
            question: "Can I share my collection with anyone?",
            answer: "Absolutely! You can share your collection’s unique link with anyone, and they can access it without needing an account."
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we prioritize your privacy and ensure that your collections are stored securely. Only people with the shared link can view your collections."
        },
        {
            question: "Can I use the app on mobile devices?",
            answer: "Yes, the app is fully responsive and works seamlessly on both mobile and desktop devices."
        },
    ];

    return (
        <section className="bg-white/80 py-20" id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl text-blue-500 font-bold text-center mb-12 capitalize">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        return (
                            <div key={index} className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
                                <Accordion
                                    className='flex w-full flex-col'
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    variants={{
                                        expanded: {
                                            opacity: 1,
                                            scale: 1,
                                        },
                                        collapsed: {
                                            opacity: 0,
                                            scale: 0.7,
                                        },
                                    }}
                                >
                                    <AccordionItem value='getting-started' className='py-2'>
                                        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950'>
                                            <div className='flex items-center'>
                                                <ChevronRight className='h-4 w-4 text-blue-500 transition-transform duration-200 group-data-[expanded]:rotate-90' />
                                                <div className='ml-2 text-blue-500 text-xl font-semibold'>
                                                    {faq.question}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='origin-left'>
                                            <p className='pl-6 pr-2 leading-relaxed text-zinc-500'>
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default FaqSection