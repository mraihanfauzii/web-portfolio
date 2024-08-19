'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Kotlin</li>
                <li>Flutter</li>
                <li>React Native</li>
                <li>Machine Learning</li>
                <li>Java Script</li>
                <li>Laravel</li>
                <li>UI/UX</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>experience 1</li>
                <li>experience 2</li>
                <li>experience 3</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>certification 1</li>
                <li>certification 2</li>
                <li>certification 3</li>
            </ul>
        )
    },
    {
        title: "Award",
        id: "award",
        content: (
            <ul className='list-disc pl-2'>
                <li>award 1</li>
                <li>award 2</li>
                <li>award 3</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/programmer.jpg' width={500} height={500}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am a passionate Mobile developer with a strong academic background in computer science. Proficient in Kotlin, React Native, and Flutter, I have experience developing various simple Android apps. 
                    
                    I am actively seeking a challenging position where I can apply my skills and knowledge to make a positive impact. Highly motivated and results-oriented, I possess a strong work ethic. Additionally, I am a team player and always eager to learn. Thank you for visiting my LinkedIn profile! I look forward to connecting with professionals who share common interests and goals.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                        {' '}
                            Skills{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
                        {' '}
                            Experience{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('certification')} active={tab === 'certification'}>
                        {' '}
                            Certification{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('award')} active={tab === 'award'}>
                        {' '}
                            Award{' '}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection