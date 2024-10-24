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
                <li>Mobile Application Development (Kotlin, Flutter, React Native) - 2 Years Experience (11 Month Work Experience)</li>
                <li>Front-End Web Development (HTML, CSS, Javascript, Next JS) - 5 Month Experience</li>
                <li>Back-End Web Development (Express JS, Nest JS, Laravel) - 4 Month Experience</li>
                <li>Computer Vision and Machine Learning - 3 Month Experience</li>
                <li>UI/UX - 5 Month Experience</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Software Engineering : Implementation and Testing Lecturer Assistant at Telkom University (Oct 2024 - Present)</li>
                <li>Back-End Mentee of Digistar Class 2024 at Digistar Club by Telkom Indonesia (Aug - Sep 2024)</li>
                <li>Mobile Engineer Intern at Telkom Indonesia (Apr - Sep 2024)</li>
                <li>Head of Public Relations (Laboratory Assistant) at Mobile Innovation Laboratory Telkom University (Aug 2023 - Aug 2024)</li>
                <li>Software Engineering : Implementation and Testing Lecturer Assistant at Telkom University (Oct 2023 - Jan 2024)</li>
                <li>Mobile Engineer Intern at Telkom Indonesia (Aug - Dec 2023)</li>
                <li>Mobile Development Learning Path at Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka (Feb - Jul 2023)</li>
                <li>Creative Bureau Staff & Secretary at The Informatics Undergraduate Student Association of Telkom University (Apr 2022 - Mar 2023)</li>
            </ul>
        )
    },
    {
        title: "Honors & Awards",
        id: "award",
        content: (
            <ul className='list-disc pl-2'>
                <li>3rd Place in Hackathon ITFest 2024 by IT Fest Micro IPB</li>
                <li>Author and Presenter at the 7th International Conference on Data Science and Its Applications (ICoDSA) 2024</li>
                <li>3rd Place in JBC Business Plan Competition 2022 by Search Telkom University</li>
                <li>The 5 Best Project Plans Award - Z Future Leader 2021 by CentennialZ</li>
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
        <section className='text-white'  id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/programmer.jpg' width={700} height={700}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am a passionate Mobile developer with a strong academic background in computer science. Proficient in Kotlin, React Native, and Flutter, I have experience developing various simple Android apps. 
                    
                    I am actively seeking a challenging position where I can apply my skills and knowledge to make a positive impact. Highly motivated and results-oriented, I possess a strong work ethic. Additionally, I am a team player and always eager to learn. Thank you for visiting my portfolio website! 
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
                        <TabButton selectTab={() => handleTabChange('award')} active={tab === 'award'}>
                        {' '}
                            Honors & Awards{' '}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection