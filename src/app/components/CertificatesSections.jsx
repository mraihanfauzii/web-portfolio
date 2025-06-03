'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const certificatesData = [
    {
        id: 1,
        title: 'Mobile Engineer Intern at Telkom Indonesia',
        dateOrPublisher: 'April - September 2024 (6 Month)',
        image: '/images/certificates/DDBMagenta.png',
        type: ['Internship', 'Mobile Engineer', 'Kotlin', 'Flutter', 'SCRUM'],
        description: "Being part of the Mobile Engineer Intern at Telkom Indonesia on the Evomo project through the Magenta DDB Telkom program.",
        myRole: [
            "Developed several CRUD features on mobile using Kotlin and Flutter, connected to the API using the MVVM architecture.",
            "Created error handling to fix various bugs.",
            "Implemented clean code practices.",
            "Collaborated with the team to build features",
            "Used the Scrum framework for task division.",
        ],
        previewUrl: 'https://magentaku.id?nomor_sertifikat=00119%2FMAGENTA%2FFHCI01%2F10%2F24'
    },
    {
        id: 2,
        title: 'Mobile Engineer Intern at Telkom Indonesia',
        dateOrPublisher: 'August - December 2023 (5 Month)',
        image: '/images/certificates/DDBKampusMerdeka.png',
        tag: ['Cert'],
        type: ['Internship', 'Mobile Engineer', 'React Native', 'SCRUM'],
        description: "Become part of Telkom's DDB internship program through the Merdeka Campus (MSIB 5) to participate in real-world project development within Telkom's Digital Business Directorate (DDB). In this internship, I was placed on the PaDi UMKM project as a Mobile Engineer Intern, developing mobile applications with React Native.",
        myRole: [
            "Fixing bugs and defects.",
            "improving several interfaces in the PaDi UMKM mobile application.",
            "Implemented clean code practices.",
            "Collaborated with the team to build features",
            "Used the Scrum framework for task division.",
        ],
        previewUrl: 'https://drive.google.com/file/d/1_Hlufew8zvIIVYV6eGzxUcGeWKjGqxHU/view?usp=sharing'
    },
    {
        id: 3,
        title: 'Mobile Development Learning Path',
        dateOrPublisher: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        image: '/images/certificates/Bangkit.png',
        type: ['Learning', 'Mobile Development', 'Kotlin', 'Soft Skill', 'Career Development', 'English', 'Pitching'],
        description: "Selected as one of the 5000 participants of the Bangkit program out of a total of 67000+ applicants to learn about the chosen learning path. Bangkit is a career readiness program led by Google in collaboration with leading technology companies in Indonesia such as GoTo, Traveloka, and the Deeptech Foundation which is designed to prepare students with the skills required by industry standards. In addition, at the end of this program students will be equipped with technical expertise, soft skills, and English proficiency.",
        learningAbout: [
            "Android For Beginner Course (Android Studio, Activity, Intent, View & ViewGroup, Style & Theme, RecyclerView).",
            "Fundamental Android Course (Fragment, Navigation, Background Thread and Networking, Android ARchitecture Component, API, Testing, Local Data Persistent, Background Task and Scheduler).",
            "Basic UX Design Course (Basic User Experience, Empathize-Define-Ideate, Storyboard & Wireframe, High-Fidelity Prorotype, UX Research and Documentation).",
            "Jetpack Compose Course (State, Lazy Layout, Navigation, Testing, Interoperability).",
            "Intermediate Android Course (Advanced UI, Animation, Localization & Accessibility, Service, Media, Geo Location, Advanced Testing, Advanced Database, Firebase)."
        ],
        previewUrl: 'https://drive.google.com/file/d/1PqTRuBbKaXXUCDp5FeFf5GiqWwFOtq4V/view?usp=sharing'
    },
    {
        id: 4,
        title: 'Author and Presenter at the 7th International Conference on Data Science and Its Applications (ICoDSA) 2024',
        dateOrPublisher: 'The 7th International Conference on Data Science and Its Applications (ICoDSA)',
        image: '/images/certificates/ICoDSA2024_Author-Certificate.jpg',
        type: ['Conference', 'Paper', 'IEEE', 'Scopus Index', 'English', 'Computer Vision', 'CNN', 'Resnet-50', 'Inception V3'],
        description: "The International Conference on Data Science and Its Applications (ICoDSA) is an annual conference that gathers researchers, academics, and professionals from around the world to present their findings and advancements in the field of data science. All papers presented at ICoDSA are indexed by Scopus, ensuring wide visibility and academic recognition. \n I participated in the 7th ICoDSA as an author and presenter of the paper titled 'Food Type Detection Using the Convolutional Neural Network Method for Calorie Counter Applications.' After the conference, the paper was published in IEEE Xplore, further broadening its reach and impact within the scientific community.",
        previewUrl: 'https://drive.google.com/drive/folders/1ng2HMfq4BpFIu2VOnyhMIGTAg-tc7Idl?usp=sharing'
    },
    {
        id: 5,
        title: '3rd Place in Hackathon ITFest 2024',
        dateOrPublisher: 'Himavo Micro IT & GDSC IPB University',
        image: '/images/certificates/3rd_Place_in_ITFest_Hackathon.png',
        type: ['Competition', 'Hackathon', 'Mobile Application', 'Pitching', 'National'],
        description: "Ranked 3rd at the ITFest 2024 Hackathon after advancing through a series of challenging elimination phases, competing against teams from several universities. Our project, DevLabs, offered an innovative approach to connect clients with architects and builders, streamlining the collaboration process through a unified platform.We developed two mobile applications: one for customers and another for vendors (architects and builders), along with a backend system that we deployed. The platform also featured a machine learning-based recommender system, which was integrated into the backend to match clients with suitable architects based on their project needs.",
        previewUrl: 'https://drive.google.com/file/d/1nre6lPJcGbCOBU8z86MiL92NJ1DPDHxH/view?usp=sharing'
    },
    {
        id: 6,
        title: '3rd Place in JBC Business Plan Competition 2022',
        dateOrPublisher: 'Search Telkom University',
        image: '/images/certificates/3rd_Place_in_JBC-Business-Plan-Competition-2022.jpg',
        type: ['Competition', 'Business Plan Competition', 'Mobile Application', 'Business Proposal', 'Pitching', 'National'],
        description: "Ranked 3rd at the JBC Business Plan Competition 2022, advancing through multiple elimination rounds while competing against teams from various universities. Our project, DevLabs, offered an innovative approach to connect clients with architects and builders, streamlining the collaboration process through a unified platform.Alongside delivering our pitch to the judges, we submitted a 55-page business proposal, meticulously outlining key components such as the business concept, operational workflow, marketing tactics, human resource management, and financial strategy. This comprehensive plan provided a clear pathway for implementation and scaling, reinforcing the feasibility of our innovation.",
        previewUrl: 'https://drive.google.com/file/d/1s0AT9OfoJkr-A0A3s3Bb_lOIJ8AW84Dj/view?usp=sharing'
    },
    {
        id: 7,
        title: 'Machine Learning Terapan',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/ml_terapan.png',
        type: ['Learning', 'Mobile Development', 'Flutter', 'Clean Architecture', 'BLoC', 'Modularisasi', 'Automate Testing (Github Action)'],
        learningAbout: [
            "Machine Learning System Design",
            "Tahapan dalam Menyusun Proyek Machine Learning",
            "Menyelesaikan Proyek Predictive Analysis : Time Series Forecasting NVDA Stock using LSTM, GRU, CNN",
            "Analisis Sentimen",
            "Computer Vision",
            "Menyelesaikan Proyek Sistem Rekomendasi : Music Recommendation System using Content Based Filtering and Collaborative Filtering",
        ],
        previewUrl: 'https://www.dicoding.com/certificates/07Z6391OWZQR'
    },
    {
        id: 8,
        title: 'Menjadi Flutter Developer Expert',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/flutter_expert.png',
        type: ['Learning', 'Mobile Development', 'Flutter', 'Clean Architecture', 'BLoC', 'Modularisasi', 'Automate Testing (Github Action)'],
        learningAbout: [
            "Clean Architeture",
            "Test-Driven Development (TDD)",
            "Advanced UI",
            "Modularization",
            "Reactive Programming",
            "Continuous Integration",
            "Performance",
            "Security",
            "Post-Development",
        ],
        previewUrl: 'https://www.dicoding.com/certificates/N9ZO99JG6XG5'
    },
    {
        id: 9,
        title: 'Belajar Penerapan Data Science',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/penerapan_data_science.png',
        type: ['Learning', 'Mobile Development', 'Kotlin', 'Soft Skill', 'Career Development', 'English', 'Pitching'],
        learningAbout: [
            "Manajemen Proyek Data Science",
            "Keterampilan Teknis Data Scientist",
            "Membuat Business Dashboard",
            "Customer Segmentation Analysis",
            "Credit Scoring Analytics",
            "Pengolahan Big Data dengan PySpark",
            "Implementasi Proyek Data Science dalam Environment Cloud",
        ],
        previewUrl: 'https://www.dicoding.com/certificates/1RXYEGNMKZVM'
    },
    {
        id: 10,
        title: 'Flutter & Dart - The Complete Guide [2024 Edition]',
        dateOrPublisher: 'Academind',
        image: '/images/certificates/flutter_udemy.jpg',
        type: ['Learning', 'Flutter', 'Dart'],
        previewUrl: 'https://www.udemy.com/certificate/UC-2b68d8c3-db2d-4644-852a-9d8d798a3cdc/'
    },
    {
        id: 11,
        title: 'Complete React Native in 2023: Zero to Mastery (with Hooks)',
        dateOrPublisher: 'Zero To Mastery Academy',
        image: '/images/certificates/react_native_udemy.jpg',
        type: ['Learning', 'React Native'],
        previewUrl: 'https://www.udemy.com/certificate/UC-2f84bb69-81f8-4cd9-b01c-656fd99bd4a5/'
    },
    {
        id: 12,
        title: 'Intensive Bootcamp Laravel Web Development',
        dateOrPublisher: 'SanberCode',
        image: '/images/certificates/laravel.png',
        type: ['Learning', 'Laravel', 'Back-End Development'],
        learningAbout: [
            "HTML, CSS, Bootstrap",
            "Javascript Basic, DOM",
            "PHP Basic, OOP Basic",
            "SQL Basic, Design ERD, Database Mysql",
            "Collaboration with Git",
            "Laravel (Route, MVC, Database & Migration, Eloquent ORM, Eloquent Relationships, CRUD, Deploy Project)",
          ],
        previewUrl: 'https://sanbercode.com/certificate/in/12a96afb-eb52-4145-b23e-0dee8e8dc5cf'
    },
    {
        id: 13,
        title: 'Membangun Sistem Machine Learning',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/sistem_machine_learning.png',
        type: ['Learning', 'Flutter', 'Dart'],
        learningAbout: [
            "Siklus Machine Learning Operations (MLOps)",
            "Membangun dan Mengelola Metadata dengan Tools Open-Source",
            "Membangun Model Machine Learning dan Proses Re-training Model",
            "Serving Model",
            "Monitoring dan Alerting Model Machine Learning",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/6RPNRL839X2M'
    },
    {
        id: 14,
        title: 'Belajar Pengembangan Machine Learning',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/pengembangan_ml.png',
        type: ['Learning', 'Flutter', 'Dart'],
        learningAbout: [
            "Pengenalan Deep Learning",
            "Neural Network dengana Tensorflow dan Keras",
            "Naatural Language Processing",
            "Time Series",
            "Image Classification",
            "Recommendation System",
            "Reinfocement Learning",
            "Konversi Model Machine Learning",
            "Konsep Generative AI",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/N9ZO9RQVYXG5'
    },
        {
        id: 15,
        title: 'Belajar Machine Learning untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/ml_pemula.png',
        type: ['Learning', 'Machine Learning'],
        learningAbout: [
            "Machine Learning Workflow",
            "Supervised Learning - Klasifikasi",
            "Supervised Learning - Regresi",
            "Unsupervised Learning - Clustering",
            "Teknik Feature Engineering",
            "Overfitting dan Underfitting",
            "Optimasi Model dengan Hyperparameter Tuning",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/MEPJNQQMLX3V'
    },
    {
        id: 16,
        title: 'Mahir SCRUM untuk Pengembangan Produk Digital',
        dateOrPublisher: 'Pijar Mahir',
        image: '/images/certificates/Sertifikat_Penyelesaian_Mahir_SCRUM_Pijar_Mahir.jpg',
        type: ['Learning', 'SCRUM', 'Agile'],
        previewUrl: 'https://pijarmahir.id/sertifikat/KbtadW6bcF'
    },
    {
        id: 17,
        title: 'Belajar Prinsip Pemrograman SOLID',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/solid.png',
        type: ['Learning', 'SOLID'],
        learningAbout: [
            "Object-Oriented Programming (OOP)",
            "Relasi pada OOP",
            "Software Design Priciple",
            "S.O.L.I.D (Single Responsibility, Open Closed, Liskov Substitution, Interface Segregation, dan Dependency Inversion)",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/L4PQG358VZO1'
    },
    {
        id: 18,
        title: 'Belajar Pengembangan Aplikasi Flutter Intermediate',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/flutter_intermediate.png',
        type: ['Learning', 'Flutter', 'Dart'],
        learningAbout: [
            "Advanced Navigation",
            "Media",
            "Localization & Accessibility",
            "Flutter Desktop",
            "Advanced Widget",
            "Code Generation",
            "Maps & Location",
            "Build Variant",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/2VX348MLNZYQ'
    },
    {
        id: 19,
        title: 'Belajar Fundamental Aplikasi Flutter',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/fundamental_flutter.png',
        type: ['Learning', 'Flutter', 'Dart'],
        learningAbout: [
            "Fundamental Flutter",
            "Design UI dengan Widget",
            "State Management",
            "API",
            "Scheduling",
            "Penyimpanan Lokal",
            "Testing",
            "Firebase di Flutter",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/07Z643QNWPQR'
    },
    {
        id: 20,
        title: 'Belajar Membuat Aplikasi Android dengan Jetpack Compose',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/jetpack_compose.png',
        type: ['Learning', 'Kotlin'],
        learningAbout: [
            "Konsep Dasar Compose",
            "Layout",
            "State",
            "Lazy Layout",
            "Navigation",
            "Testing",
            "Interoperability",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/81P23835YXOY'
    },
    {
        id: 21,
        title: 'Belajar Pengembangan Aplikasi Android Intermediate',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/android_intermediate.png',
        type: ['Learning', 'Kotlin'],
        learningAbout: [
            "Advanced UI",
            "Animation",
            "Localization & Accessibility",
            "Service",
            "Media",
            "Geo Location",
            "Advanced Testing",
            "Advanced Database",
            "Firebase",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/QLZ9Q462DZ5D'
    },
    {
        id: 22,
        title: 'Belajar Fundamental Aplikasi Android',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/fundamental_android.png',
        type: ['Learning', 'Kotlin'],
        learningAbout: [
            "Dasar Pengembangan Aplikasi Android",
            "Fragment",
            "Navigation",
            "Background Thread dan Networking",
            "Android Architecture Component",
            "API",
            "Testing",
            "Local Data Persistent",
            "Background Task and Scheduler",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ09D690Z65'
    },
    {
        id: 23,
        title: 'Belajar Dasar Pemrograman Web',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/dasar_pemrograman_web.png',
        type: ['Learning', 'Front-End Development', 'Back-End Development'],
        learningAbout: [
            "HTML & CSS",
            "Layout Responsif dengan Flexbox",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/N9ZO6E4V0XG5'
    },
    {
        id: 24,
        title: 'Belajar Dasar-Dasar DevOps',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/dasar-dasar_devops.png',
        type: ['Learning', 'DevOps'],
        learningAbout: [
            "Prinsip-prinsip DevOps",
            "CALMS Framework",
            "Praktik DevOps",
            "Implementasi DevOps",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/4EXGQONR1ZRL'
    },
    {
        id: 25,
        title: 'Belajar Membuat Aplikasi Back-End untuk Pemula dengan Javascript',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/be_pemula.png',
        type: ['Learning', 'Back-End Development', 'Javascript'],
        learningAbout: [
            "Konsep Website (Front-End, Back-End, HTTP, RESTful API)",
            "Dasar-dasar Node.js",
            "Membangun Web Service menggunakan Node.js",
            "Deploy Web Service",
            "Menguji RESTful API menggunakan Postman"
          ],
        previewUrl: 'https://www.dicoding.com/certificates/JMZV3LN5JPN9'
    },
    {
        id: 26,
        title: 'Belajar Dasar AI',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/dasar_ai.png',
        type: ['Learning'],
        learningAbout: [
            "Konsep Dasar AI",
            "Data untuk AI",
            "Konsep Dasar Machine Learning sebagai bagian dari AI",
            "Konsep Dasar Deep Learning beserta implementasinya",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/NVP77RO3GPR0'
    },
    {
        id: 27,
        title: 'Belajar Dasar UX Design',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/ux_design.png',
        type: ['Learning', 'UI/UX', 'Figma'],
        learningAbout: [
            "Konsep Dasar User Experience Design",
            "Empathize, Define, & Ideate",
            "Storyboard dan Wireframe",
            "High-Fidelity Prototype",
            "UX Research dan Dokumentasi"
          ],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ096RGKZ65'
    },
    {
        id: 28,
        title: 'Belajar Membuat Aplikasi Android untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/android_pemula.png',
        type: ['Learning', 'Kotlin'],
        learningAbout: [
            "Android Studio",
            "Activity",
            "Intent",
            "View and ViewGroup",
            "Style and Theme",
            "RecyclerView",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/MEPJK1YW6X3V'
    },
    {
        id: 29,
        title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/flutter_pemula.png',
        type: ['Learning', 'Flutter', 'Dart'],
        learningAbout: [
            "Dasar - Dasar Flutter",
            "Widget",
            "Build Aplikasi Flutter kedalam bentuk berkas APK, AAB, dan folder web",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ093210Z65'
    },
    {
        id: 30,
        title: 'Belajar Dasar Git dengan GitHub',
        dateOrPublisher: 'Dicoding Indonesia',
        image: '/images/certificates/github.png',
        type: ['Learning', 'Git', 'GitHub'],
        learningAbout: [
            "Git dan GitHub",
            "Dasar Git",
            "Git Branches",
            "Kolaborasi dengan Tim",
            "GitHub sebagai Portofolio",
          ],
        previewUrl: 'https://www.dicoding.com/certificates/0LZ0GNNRQX65'
    },
    {
        id: 31,
        title: 'IT Support Google Specialization',
        dateOrPublisher: 'Google',
        image: '/images/certificates/IT_Support_Google-Coursera.jpeg',
        type: ['Learning', 'IT Support', 'Computer Networks', 'Operating Systems', 'System Administration', 'IT Security'],
        learningAbout: [
            "Fundamentals of Technical Support",
            "Computer Networking Essentials",
            "Operating Systems : Becoming an Empowered User",
            "System Administration and IT Infrastructure Services",
            "IT Security: Defending Against Cybercrime"
          ],
        previewUrl: 'https://coursera.org/verify/professional-cert/AB547QLL7XBW'
    },
    {
        id: 32,
        title: 'UI/UX Bootcamp',
        dateOrPublisher: 'MySkill',
        image: '/images/certificates/myskill-uiux.png',
        type: ['Learning', 'UI/UX', 'Figma'],
        learningAbout: [
            "Fundamental UI/UX Design",
            "Proses UI/UX Design",
            "User Research",
            "Persona & Journey Mapping",
            "Ideation Process",
            "Usability Testing",
            "UX Case Study",
            "etc"
          ],
        previewUrl: 'https://drive.google.com/file/d/18Ep50MBSB9XtGs-naNH2vLNM0VKrfew-/view?usp=sharing'
    },
    {
        id: 33,
        title: 'Digital Marketing Bootcamp',
        dateOrPublisher: 'MySkill',
        image: '/images/certificates/myskill-digmar.png',
        type: ['Learning', 'Digital Marketing'],
        description: "2-Month Intensive Bootcamp from MySkill.id on Digital Marketing, culminating in a final project to implement the learned materials by collaborating with MSMEs to enhance their social media reach and brand awareness.",
        learningAbout: [
            "The Fundamentals of Marketing",
            "Brand Strategy",
            "Audience Persona & Insight",
            "Campaign & Media Planning",
            "Partnership Marketing",
            "Social Media Strategy, Research, & Analytics",
            "etc",
          ],
        previewUrl: 'https://drive.google.com/file/d/11aWtaYeKBQnnU0-fTF0v1RGX-hz3bDmk/view?usp=sharing'
    },
]

const CertificatesSections = () => {
    const ref = useRef(null)

    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const listA = certificatesData.slice(0, 12);
    const listB = certificatesData.slice(12)

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

    function renderListA() {
        return listA.map((item, i) => {
            const delay = i * 0.4;
            return (
            <motion.li
                key={item.id}
                initial="initial"
                animate="animate"
                variants={cardVariants}
                transition={{ duration: 0.3, delay }}
            >
                <div onClick={() => openModal(item)}>
                    <ProjectCard 
                        key={item.id} 
                        title={item.title} 
                        dateOrPublisher={item.dateOrPublisher} 
                        type={item.type}
                        imgUrl={item.image}
                        gitUrl={''}
                        previewUrl={item.previewUrl}
                        showGitUrl = {false}
                        showPreviewUrl = {true}
                    />
                </div>
            </motion.li>
            );
        });
    }
        
    function renderListB() {
    if (!showAll) return null;
    return listB.map((item, i) => {
        const delay = i * 0.4;
        return (
        <motion.li
            key={item.id}
            initial="initial"
            animate="animate"
            variants={cardVariants}
            transition={{ duration: 0.3, delay }}
        >
            <div onClick={() => openModal(item)}>
                <ProjectCard 
                    key={item.id} 
                    title={item.title} 
                    dateOrPublisher={item.dateOrPublisher} 
                    type={item.type}
                    imgUrl={item.image}
                    gitUrl={''}
                    previewUrl={item.previewUrl}
                    showGitUrl = {false}
                    showPreviewUrl = {true}
                />
            </div>
        </motion.li>
        );
    });
    }
        
    function handleToggle() {
        setShowAll((prev) => !prev);
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
                {renderListA()}
                {renderListB()}
            </ul>
            <div className="flex justify-center mt-4">
                <button onClick={handleToggle}
                className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
                >
                {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
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
                        Download Certificate
                    </a>
                    )}
                </div>
                </div>
            )}
        </section>
    )
}

export default CertificatesSections