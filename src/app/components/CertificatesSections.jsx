'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { animate, motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: 'Mobile Engineer Intern at Telkom Indonesia',
        description: 'April - September 2024 (6 Month)',
        image: '/images/certificates/DDBMagenta.png',
        tag: ['Cert'],
        previewUrl: 'https://media.licdn.com/dms/document/media/D562DAQHH6wxna8SC_g/profile-treasury-document-pdf-analyzed/0/1728452751196?e=1730937600&v=beta&t=5zo0bqtZ-CHcjk-CKvyFCFRgms0-g2tcpEwO701QWkU'
    },
    {
        id: 2,
        title: 'Mobile Engineer Intern at Telkom Indonesia',
        description: 'August - December 2023 (5 Month)',
        image: '/images/certificates/DDBKampusMerdeka.png',
        tag: ['Cert'],
        previewUrl: 'https://media.licdn.com/dms/document/media/D562DAQHRw5toBW2vqA/profile-treasury-document-pdf-analyzed/0/1709935468804?e=1730937600&v=beta&t=aJmuDrbAu2eoEriVKE45pTqnW0N-4sFX5x5QHy-g3a8'
    },
    {
        id: 3,
        title: 'Mobile Development Learning Path',
        description: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        image: '/images/certificates/Bangkit.png',
        tag: ['Cert'],
        previewUrl: 'https://media.licdn.com/dms/document/media/D562DAQEgMk-8ZQPIWw/profile-treasury-document-pdf-analyzed/0/1709935683131?e=1730937600&v=beta&t=slQWi4UaJGTI6DhVLeKYmlEQoVZ0vsWNvnFvmXPZU7E'
    },
    {
        id: 4,
        title: 'Author and Presenter at the 7th International Conference on Data Science and Its Applications (ICoDSA) 2024',
        description: 'I participated in the 7th ICoDSA as an author and presenter of the paper titled "Food Type Detection Using the Convolutional Neural Network Method for Calorie Counter Applications." All papers presented at ICoDSA are indexed by Scopus, ensuring wide visibility and academic recognition. After the conference, the paper was published in IEEE Xplore, further broadening its reach and impact within the scientific community.',
        image: '/images/certificates/ICoDSA2024_Author-Certificate.jpg',
        tag: ['Cert'],
        previewUrl: 'https://drive.google.com/drive/folders/1ng2HMfq4BpFIu2VOnyhMIGTAg-tc7Idl?usp=sharing'
    },
    {
        id: 5,
        title: '3rd Place in Hackathon ITFest 2024',
        description: 'We developed two mobile applications: one for customers and another for vendors (architects and builders), along with a backend system that we deployed. The platform also featured a machine learning-based recommender system, which was integrated into the backend to match clients with suitable architects based on their project needs.',
        image: '/images/certificates/3rd_Place_in_ITFest_Hackathon.png',
        tag: ['Cert'],
        previewUrl: 'https://media.licdn.com/dms/document/media/D562DAQFE7szufPuxGg/profile-treasury-document-pdf-analyzed/0/1727925130226?e=1730937600&v=beta&t=vvSjIhVuqUb_F0jH9_ZCAm-tBZoZgP5km7Vy0kbxdZQ'
    },
    {
        id: 6,
        title: '3rd Place in JBC Business Plan Competition 2022',
        description: 'Ranked 3rd at the JBC Business Plan Competition 2022, advancing through multiple elimination rounds while competing against teams from various universities. Our project, DevLabs, offered an innovative approach to connect clients with architects and builders, streamlining the collaboration process through a unified platform.',
        image: '/images/certificates/3rd_Place_in_JBC-Business-Plan-Competition-2022.jpg',
        tag: ['Cert'],
        previewUrl: 'https://drive.google.com/file/d/1s0AT9OfoJkr-A0A3s3Bb_lOIJ8AW84Dj/view?usp=sharing'
    },
    {
        id: 7,
        title: 'Flutter & Dart - The Complete Guide [2024 Edition]',
        description: 'Academind',
        image: '/images/certificates/flutter_udemy.jpg',
        tag: ['Cert'],
        previewUrl: 'https://www.udemy.com/certificate/UC-2b68d8c3-db2d-4644-852a-9d8d798a3cdc/'
    },
    {
        id: 8,
        title: 'Complete React Native in 2023: Zero to Mastery (with Hooks)',
        description: 'Zero To Mastery Academy',
        image: '/images/certificates/react_native_udemy.jpg',
        tag: ['Cert'],
        previewUrl: 'https://www.udemy.com/certificate/UC-2f84bb69-81f8-4cd9-b01c-656fd99bd4a5/'
    },
    {
        id: 9,
        title: 'Intensive Bootcamp Laravel Web Development',
        description: 'SanberCode',
        image: '/images/certificates/laravel.png',
        tag: ['Cert'],
        previewUrl: 'https://sanbercode.com/certificate/in/12a96afb-eb52-4145-b23e-0dee8e8dc5cf'
    },
    {
        id: 10,
        title: 'Mahir SCRUM untuk Pengembangan Produk Digital',
        description: 'Pijar Mahir',
        image: '/images/certificates/Sertifikat_Penyelesaian_Mahir_SCRUM_Pijar_Mahir.jpg',
        tag: ['Cert'],
        previewUrl: 'https://pijarmahir.id/sertifikat/KbtadW6bcF'
    },
    {
        id: 11,
        title: 'Belajar Prinsip Pemrograman SOLID',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/solid.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/L4PQG358VZO1'
    },
    {
        id: 12,
        title: 'Belajar Membuat Aplikasi Android dengan Jetpack Compose',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/jetpack_compose.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/81P23835YXOY'
    },
    {
        id: 13,
        title: 'Belajar Pengembangan Aplikasi Android Intermediate',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/android_intermediate.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/QLZ9Q462DZ5D'
    },
    {
        id: 14,
        title: 'Belajar Fundamental Aplikasi Android',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/fundamental_android.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ09D690Z65'
    },
    {
        id: 15,
        title: 'Belajar Dasar Pemrograman Web',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/dasar_pemrograman_Web.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/N9ZO6E4V0XG5'
    },
    {
        id: 16,
        title: 'Belajar Dasar-Dasar DevOps',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/dasar-dasar_devops.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/4EXGQONR1ZRL'
    },
    {
        id: 17,
        title: 'Belajar Machine Learning untuk Pemula',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/ml_pemula.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/MEPJNQQMLX3V'
    },
    {
        id: 18,
        title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/be_pemula.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/JMZV3LN5JPN9'
    },
    {
        id: 19,
        title: 'Belajar Dasar AI',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/dasar_ai.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/NVP77RO3GPR0'
    },
    {
        id: 20,
        title: 'Belajar Dasar UX Design',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/ux_design.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ096RGKZ65'
    },
    {
        id: 21,
        title: 'Belajar Membuat Aplikasi Android untuk Pemula',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/android_pemula.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/MEPJK1YW6X3V'
    },
    {
        id: 22,
        title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/flutter_pemula.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ093210Z65'
    },
    {
        id: 23,
        title: 'Belajar Dasar Git dengan GitHub',
        description: 'Dicoding Indonesia',
        image: '/images/certificates/github.png',
        tag: ['Cert'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ0GNNRQX65'
    },
    {
        id: 24,
        title: 'IT Support Google Specialization',
        description: 'Google',
        image: '/images/certificates/IT_Support_Google-Coursera.jpeg',
        tag: ['Cert'],
        previewUrl: 'https://coursera.org/verify/professional-cert/AB547QLL7XBW'
    },
    {
        id: 25,
        title: 'UI/UX Bootcamp',
        description: 'MySkill',
        image: '/images/certificates/myskill-uiux.png',
        tag: ['Cert'],
        previewUrl: 'https://drive.google.com/file/d/18Ep50MBSB9XtGs-naNH2vLNM0VKrfew-/view?usp=sharing'
    },
    {
        id: 26,
        title: 'Digital Marketing Bootcamp',
        description: 'MySkill',
        image: '/images/certificates/myskill-digmar.png',
        tag: ['Cert'],
        previewUrl: 'https://drive.google.com/file/d/11aWtaYeKBQnnU0-fTF0v1RGX-hz3bDmk/view?usp=sharing'
    },
]

const ProjectsSections = () => {
    const [tag, setTag] = useState("Cert")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y:50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }

    return (
        <section id='certificates'>
            <br />
            <br />
            <br />
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Certificates
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial='initial' 
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            gitUrl={''}
                            previewUrl={project.previewUrl}
                            showGitUrl = {false}
                            showPreviewUrl = {true}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSections