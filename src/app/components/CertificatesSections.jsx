'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from 'framer-motion'

const certificatesData = [
    {
        id: 1,
        title: 'Mobile Engineer Intern at Telkom Indonesia',
        dateOrPublisher: 'April - September 2024 (6 Month)',
        image: '/images/certificates/DDBMagenta.png',
        tag: ['Cert'],
        type: ['Internship', 'Mobile Engineer', 'Kotlin', 'Flutter', 'SCRUM'],
        previewUrl: 'https://magentaku.id?nomor_sertifikat=00119%2FMAGENTA%2FFHCI01%2F10%2F24'
    },
    {
        id: 2,
        title: 'Mobile Engineer Intern at Telkom Indonesia',
        dateOrPublisher: 'August - December 2023 (5 Month)',
        image: '/images/certificates/DDBKampusMerdeka.png',
        tag: ['Cert'],
        type: ['Internship', 'Mobile Engineer', 'React Native', 'SCRUM'],
        previewUrl: 'https://drive.google.com/file/d/1_Hlufew8zvIIVYV6eGzxUcGeWKjGqxHU/view?usp=sharing'
    },
    {
        id: 3,
        title: 'Mobile Development Learning Path',
        dateOrPublisher: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        image: '/images/certificates/Bangkit.png',
        tag: ['Cert'],
        type: ['Learning', 'Mobile Development', 'Kotlin', 'Soft Skill', 'Career Development', 'English', 'Pitching'],
        previewUrl: 'https://drive.google.com/file/d/1PqTRuBbKaXXUCDp5FeFf5GiqWwFOtq4V/view?usp=sharing'
    },
    {
        id: 4,
        title: 'Author and Presenter at the 7th International Conference on Data Science and Its Applications (ICoDSA) 2024',
        dateOrPublisher: 'The 7th International Conference on Data Science and Its Applications (ICoDSA)',
        image: '/images/certificates/ICoDSA2024_Author-Certificate.jpg',
        tag: ['Cert'],
        type: ['Conference', 'Paper', 'IEEE', 'Scopus Index', 'English', 'Computer Vision', 'CNN', 'Resnet-50', 'Inception V3'],
        previewUrl: 'https://drive.google.com/drive/folders/1ng2HMfq4BpFIu2VOnyhMIGTAg-tc7Idl?usp=sharing'
    },
    {
        id: 5,
        title: '3rd Place in Hackathon ITFest 2024',
        dateOrPublisher: 'Himavo Micro IT & GDSC IPB University',
        image: '/images/certificates/3rd_Place_in_ITFest_Hackathon.png',
        tag: ['Cert'],
        type: ['Competition', 'Hackathon', 'Mobile Application', 'Pitching', 'National'],
        previewUrl: 'https://drive.google.com/file/d/1nre6lPJcGbCOBU8z86MiL92NJ1DPDHxH/view?usp=sharing'
    },
    {
        id: 6,
        title: '3rd Place in JBC Business Plan Competition 2022',
        dateOrPublisher: 'Search Telkom University',
        image: '/images/certificates/3rd_Place_in_JBC-Business-Plan-Competition-2022.jpg',
        tag: ['Cert'],
        type: ['Competition', 'Business Plan Competition', 'Mobile Application', 'Business Proposal', 'Pitching', 'National'],
        previewUrl: 'https://drive.google.com/file/d/1s0AT9OfoJkr-A0A3s3Bb_lOIJ8AW84Dj/view?usp=sharing'
    },
    {
        id: 7,
        title: 'Flutter & Dart - The Complete Guide [2024 Edition]',
        dateOrPublisher: 'Academind',
        image: '/images/certificates/flutter_udemy.jpg',
        tag: ['Cert'],
        type: ['Learning', 'Flutter', 'Dart'],
        previewUrl: 'https://www.udemy.com/certificate/UC-2b68d8c3-db2d-4644-852a-9d8d798a3cdc/'
    },
    {
        id: 8,
        title: 'Complete React Native in 2023: Zero to Mastery (with Hooks)',
        dateOrPublisher: 'Zero To Mastery Academy',
        image: '/images/certificates/react_native_udemy.jpg',
        tag: ['Cert'],
        type: ['Learning', 'React Native'],
        previewUrl: 'https://www.udemy.com/certificate/UC-2f84bb69-81f8-4cd9-b01c-656fd99bd4a5/'
    },
    {
        id: 9,
        title: 'Intensive Bootcamp Laravel Web Development',
        dateOrPublisher: 'SanberCode',
        image: '/images/certificates/laravel.png',
        tag: ['Cert'],
        type: ['Learning', 'Laravel', 'Back-End Development'],
        previewUrl: 'https://sanbercode.com/certificate/in/12a96afb-eb52-4145-b23e-0dee8e8dc5cf'
    },
    {
        id: 10,
        title: 'Mahir SCRUM untuk Pengembangan Produk Digital',
        dateOrPublisher: 'Pijar Mahir',
        image: '/images/certificates/Sertifikat_Penyelesaian_Mahir_SCRUM_Pijar_Mahir.jpg',
        tag: ['Cert'],
        type: ['Learning', 'SCRUM', 'Agile'],
        previewUrl: 'https://pijarmahir.id/sertifikat/KbtadW6bcF'
    },
    {
        id: 11,
        title: 'Belajar Prinsip Pemrograman SOLID',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/solid.png',
        tag: ['Cert'],
        type: ['Learning', 'SOLID'],
        previewUrl: 'https://www.dicoding.com/certificates/L4PQG358VZO1'
    },
    {
        id: 12,
        title: 'Belajar Pengembangan Aplikasi Flutter Intermediate',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/flutter_intermediate.png',
        tag: ['Cert'],
        type: ['Learning', 'Flutter', 'Dart'],
        previewUrl: 'https://www.dicoding.com/certificates/2VX348MLNZYQ'
    },
    {
        id: 13,
        title: 'Belajar Fundamental Aplikasi Flutter',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/fundamental_flutter.png',
        tag: ['Cert'],
        type: ['Learning', 'Flutter', 'Dart'],
        previewUrl: 'https://www.dicoding.com/certificates/07Z643QNWPQR'
    },
    {
        id: 14,
        title: 'Belajar Membuat Aplikasi Android dengan Jetpack Compose',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/jetpack_compose.png',
        tag: ['Cert'],
        type: ['Learning', 'Kotlin'],
        previewUrl: 'https://www.dicoding.com/certificates/81P23835YXOY'
    },
    {
        id: 15,
        title: 'Belajar Pengembangan Aplikasi Android Intermediate',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/android_intermediate.png',
        tag: ['Cert'],
        type: ['Learning', 'Kotlin'],
        previewUrl: 'https://www.dicoding.com/certificates/QLZ9Q462DZ5D'
    },
    {
        id: 16,
        title: 'Belajar Fundamental Aplikasi Android',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/fundamental_android.png',
        tag: ['Cert'],
        type: ['Learning', 'Kotlin'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ09D690Z65'
    },
    {
        id: 17,
        title: 'Belajar Dasar Pemrograman Web',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/dasar_pemrograman_web.png',
        tag: ['Cert'],
        type: ['Learning', 'Front-End Development', 'Back-End Development'],
        previewUrl: 'https://www.dicoding.com/certificates/N9ZO6E4V0XG5'
    },
    {
        id: 18,
        title: 'Belajar Dasar-Dasar DevOps',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/dasar-dasar_devops.png',
        tag: ['Cert'],
        type: ['Learning', 'DevOps'],
        previewUrl: 'https://www.dicoding.com/certificates/4EXGQONR1ZRL'
    },
    {
        id: 19,
        title: 'Belajar Machine Learning untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/ml_pemula.png',
        tag: ['Cert'],
        type: ['Learning', 'Machine Learning'],
        previewUrl: 'https://www.dicoding.com/certificates/MEPJNQQMLX3V'
    },
    {
        id: 20,
        title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/be_pemula.png',
        tag: ['Cert'],
        type: ['Learning', 'Back-End Development', 'Javascript'],
        previewUrl: 'https://www.dicoding.com/certificates/JMZV3LN5JPN9'
    },
    {
        id: 21,
        title: 'Belajar Dasar AI',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/dasar_ai.png',
        tag: ['Cert'],
        type: ['Learning'],
        previewUrl: 'https://www.dicoding.com/certificates/NVP77RO3GPR0'
    },
    {
        id: 22,
        title: 'Belajar Dasar UX Design',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/ux_design.png',
        tag: ['Cert'],
        type: ['Learning', 'UI/UX', 'Figma'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ096RGKZ65'
    },
    {
        id: 23,
        title: 'Belajar Membuat Aplikasi Android untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/android_pemula.png',
        tag: ['Cert'],
        type: ['Learning', 'Kotlin'],
        previewUrl: 'https://www.dicoding.com/certificates/MEPJK1YW6X3V'
    },
    {
        id: 24,
        title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/flutter_pemula.png',
        tag: ['Cert'],
        type: ['Learning', 'Flutter', 'Dart'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ093210Z65'
    },
    {
        id: 25,
        title: 'Belajar Dasar Git dengan GitHub',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/github.png',
        tag: ['Cert'],
        type: ['Learning', 'Git', 'GitHub'],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ0GNNRQX65'
    },
    {
        id: 26,
        title: 'IT Support Google Specialization',
        dateOrPublisher: 'Google',
        image: '/images/certificates/IT_Support_Google-Coursera.jpeg',
        tag: ['Cert'],
        type: ['Learning', 'IT Support', 'Computer Networks', 'Operating Systems', 'System Administration', 'IT Security'],
        previewUrl: 'https://coursera.org/verify/professional-cert/AB547QLL7XBW'
    },
    {
        id: 27,
        title: 'UI/UX Bootcamp',
        dateOrPublisher: 'MySkill',
        image: '/images/certificates/myskill-uiux.png',
        tag: ['Cert'],
        type: ['Learning', 'UI/UX', 'Figma'],
        previewUrl: 'https://drive.google.com/file/d/18Ep50MBSB9XtGs-naNH2vLNM0VKrfew-/view?usp=sharing'
    },
    {
        id: 28,
        title: 'Digital Marketing Bootcamp',
        dateOrPublisher: 'MySkill',
        image: '/images/certificates/myskill-digmar.png',
        tag: ['Cert'],
        type: ['Learning', 'Digital Marketing'],
        previewUrl: 'https://drive.google.com/file/d/11aWtaYeKBQnnU0-fTF0v1RGX-hz3bDmk/view?usp=sharing'
    },
]

const CertificatesSections = () => {
    const [tag] = useState("Cert")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const filteredProjects = certificatesData.filter((project) => 
        project.tag.includes(tag)
    )

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openModal = (project) => {
        setSelectedCertificate(project)
    }

    const closeModal = () => {
        setSelectedCertificate(null)
    }

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
                        <div onClick={() => openModal(project)}>
                            <ProjectCard 
                                key={project.id} 
                                title={project.title} 
                                dateOrPublisher={project.dateOrPublisher} 
                                type={project.type}
                                imgUrl={project.image}
                                gitUrl={''}
                                previewUrl={project.previewUrl}
                                showGitUrl = {false}
                                showPreviewUrl = {true}
                            />
                        </div>
                    </motion.li>
                ))}
            </ul>
            {selectedCertificate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" 
                onClick={closeModal}
                >
                <div className="bg-[#1e1e1e] w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-auto relative rounded-2xl p-6 text-white"
                onClick={(e) => e.stopPropagation()}
                    >
                    <button
                    className="absolute top-5 right-5 text-xl font-bold"
                    onClick={closeModal}>
                    X
                    </button>

                    <h2 className="text-2xl font-bold text-center mb-4">{selectedCertificate.title}</h2>
                    <div className="flex justify-center mb-4">
                        <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="max-h-80 object-contain"
                        />
                    </div>
                    <p className="text-gray-200 mb-4">{selectedCertificate.description}</p>

                    {selectedCertificate.myRole && (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">My Role</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {selectedCertificate.myRole.map((myRole, i) => (
                            <li key={i}>{myRole}</li>
                            ))}
                        </ul>
                    </div>
                    )}

                    {selectedCertificate.learningAbout && (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Learning About</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {selectedCertificate.learningAbout.map((learningAbout, i) => (
                            <li key={i}>{learningAbout}</li>
                            ))}
                        </ul>
                    </div>
                    )}

                    {selectedCertificate.previewUrl && selectedCertificate.previewUrl !== "/" && (
                    <a
                        href={selectedCertificate.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border rounded px-3 py-2 mt-2 hover:bg-white hover:text-black transition-colors"
                    >
                        View Certificate
                    </a>
                    )}
                </div>
                </div>
            )}
        </section>
    )
}

export default CertificatesSections