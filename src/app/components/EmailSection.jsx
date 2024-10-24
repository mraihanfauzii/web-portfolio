'use client';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedInIcon from '../../../public/linkedin-icon.svg';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const form = useRef();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            userId
        )
        .then((result) => {
            console.log('Email sent:', result.text);
            setEmailSubmitted(true);
        }, (error) => {
            console.error('Error:', error.text);
            alert('Failed to send email. Please try again later.');
        });
    };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
            <div className='z-9'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I&apos;m open to exploring new professional opportunities and collaborations. Whether you have a project proposal, a question, or simply want to network, feel free to reach out. I&apos;ll respond as promptly as possible, and I look forward to building meaningful connections!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/mraihanfauzii' target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt='Github Icon'/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/muhammad-raihan-fauzi/' target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedInIcon} alt='LinkedIn Icon'/>
                    </Link>
                </div>
            </div>
            <div>
                <form ref={form} className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='from_name' className='text-white block mb-2 text-sm font-medium'>
                            Your Name
                        </label>
                        <input 
                            name='from_name'
                            type='text' 
                            id='from_name' 
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='John Doe'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='reply_to' className='text-white block mb-2 text-sm font-medium'>
                            Your E-mail
                        </label>
                        <input 
                            name='reply_to'
                            type='email' 
                            id='email' 
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='john.doe@company.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input 
                            name='subject'
                            type='text' 
                            id='subject' 
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Discussion on Software Development Collaboration...'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-secondary-500 text-sm mt-2'>
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
