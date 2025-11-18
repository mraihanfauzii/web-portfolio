'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: 'DevLabs',
        description: 'DevLabs is an all-in-one platform designed to facilitate seamless collaboration between clients, architects, and builders throughout every stage of a project.',
        image: '/images/projects/DevLabs.png',
        tag: ['Mobile'],
        stacks: ['Kotlin', 'MVVM', 'Recommender System', 'Google Map API', 'Youtube Player', 'ROOM DAO', 'Camera', 'Datastore', 'Retrofit'],
        keyFeatures: [
            "An architect portfolio and rating for clients to browse",
            "Progress tracking similar to online shopping",
            "System recommender",
          ],
          keyTechnologies: [
            "Mobile application, built using Kotlin, follows the MVVM architecture (Model-View-ViewModel) to enhance code structure and maintainability. It also features robust error handling to ensure reliable performance. For location-based project features, the app integrates the Google Maps API to help users determine and display project locations. The mobile app also uses SQLite for storing favorites, including architect portfolios and articles, offering users convenient offline access to key information. ",
            "Meanwhile, core project data and other client information are stored in PostgreSQL, connected to the backend for secure and scalable storage. The backend is built using Node.js and Express, ensuring seamless data management and communication.",
            "A recommendation engine, developed with Python and Flask, analyzes user preferences like budget, location, and style to provide tailored architect suggestions via API integration.",
          ],
        gitUrl: 'https://github.com/mraihanfauzii/DevLabs-User-Kotlin',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Fitnessist',
        description: 'This application is equipped with features such as exercises, food scanning with computer vision, steps based on selected programs, calorie counters, gamification, sports articles and healthy living tips, as well as user personalization. ',
        image: '/images/projects/Fitnessist.png',
        tag: ['Mobile'],
        stacks: ['Kotlin', 'MVVM', 'Computer Vision', 'Camera', 'Retrofit'],
        gitUrl: 'https://github.com/Fitnessist/fitnessist-mobile',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Movies To Go',
        description: 'This application is built with React Native and is a movie catalog application that fetches data from TheMovieDB API. It uses Firebase for authentication, includes a favorite feature, and uses the Google Map API to display cinema locations.',
        image: '/images/projects/MoviesToGo.png',
        tag: ['Mobile'],
        stacks: ['React Native', 'JavaScript', 'Firebase', 'Google Map API', 'Expo'],
        gitUrl: 'https://github.com/mraihanfauzii/MoviesToGo-ReactNative',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'Story App(Flutter)',
        description: 'This application is a story app where users can view all stories with an infinite scroll feature, upload stories with location tags, and access two app versions: paid and free. It also includes language localization and theme customization. This app was developed to fulfill the requirements for the Dicoding Flutter Intermediate certificate by implementing concepts taught in the respective modules.',
        image: '/images/projects/StoryApp_Flutter.png',
        tag: ['Mobile'],
        stacks: ['Flutter', 'Dart', 'Provider', 'Http', 'Google Maps API', 'Go Router'],
        gitUrl: 'https://github.com/mraihanfauzii/StoryApp-Flutter-Intermediate-Dicoding',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'Story App(Kotlin)',
        description: 'There is an onboarding section introducing the application, created using Motion Layout. It includes authentication and live input error handling. It uses the Google Map API to view the location of the user submitting a story. The story list is loaded with RecyclerView and Paging 3. There is also basic testing implemented.',
        image: '/images/projects/StoryApp.png',
        tag: ['Mobile'],
        stacks: ['Kotlin', 'MVVM', 'Paging 3','Google Maps API', 'Camera', 'Retrofit', 'Mockito (Testing)'],
        gitUrl: 'https://github.com/mraihanfauzii/StoryAPP_Kotlin',
        previewUrl: '/'
    },
    {
        id: 6,
        title: 'Restaurant List App',
        description: 'This application is a restaurant listing app with data sourced from the Dicoding API. It includes several features such as viewing restaurant details, saving restaurants to favorites using SQLite, allowing users to leave comments on each restaurants description, setting notification reminders, and changing the app theme.',
        image: '/images/projects/RestaurantListApp.png',
        tag: ['Mobile'],
        stacks: ['Flutter', 'Dart', 'Provider', 'Http', 'Android Alarm Manager', 'SQLite', 'Testing'],
        gitUrl: 'https://github.com/mraihanfauzii/RestaurantApp-Flutter-Fundamental-Dicoding',
        previewUrl: '/'
    },
    {
        id: 7,
        title: 'Jetpack Compose Movie App',
        description: 'This application is built with Jetpack Compose and serves as a movie catalog application.',
        image: '/images/projects/JetpackApp.png',
        tag: ['Mobile'],
        stacks: ['Kotlin', 'Jetpack Compose'],
        gitUrl: 'https://github.com/mraihanfauzii/JetpackComposeMovieApp',
        previewUrl: '/'
    },
    {
        id: 8,
        title: 'Warung Tani',
        description: 'Warung Tani is a marketplace that provides services in the form of intermediaries between farmers and consumers.',
        image: '/images/projects/Warung-Tani_Mobile.png',
        tag: ['Mobile'],
        stacks: ['Flutter', 'Dart', 'Http'],
        gitUrl: 'https://github.com/mraihanfauzii/WarungTaniAPP_Flutter',
        previewUrl: '/'
    },
    {
        id: 9,
        title: 'Github API App',
        description: 'This application uses the GitHub API to search for GitHub profiles and view the following and followers of those profiles. It includes a favorite feature that is stored in the internal database, and there is also a feature to switch between dark and light themes.',
        image: '/images/projects/GithubApp.png',
        tag: ['Mobile'],
        stacks: ['Kotlin', 'MVVM', 'GithubAPI', 'Retrofit', 'ROOM DAO'],
        gitUrl: 'https://github.com/mraihanfauzii/GitHubAPIAPP_Kotlin',
        previewUrl: '/'
    },
    {
        id: 10,
        title: 'My Portfolio Website',
        description: 'This website, developed with NextJS.',
        image: '/images/projects/MyPortfolioWebsite.png',
        tag: ['FE & BE'],
        stacks: ['NextJs', 'ReactJs', 'EmailJs'],
        gitUrl: 'https://github.com/mraihanfauzii/web-portfolio',
        previewUrl: '/'
    },
    {
        id: 11,
        title: 'Warung Tani',
        description: 'Warung Tani is a marketplace that provides services in the form of intermediaries between farmers and consumers.',
        image: '/images/projects/Warung-Tani_Web.png',
        tag: ['FE & BE'],
        stacks: ['Laravel', 'PHP', 'Vanilla CSS', 'MySQL'],
        gitUrl: 'https://github.com/mraihanfauzii/WarungTaniWebAndAPI',
        previewUrl: '/'
    },
    {
        id: 12,
        title: 'Rentify',
        description: 'Rentify is a web-based application that is used to book sports venues, music studios, ballrooms, and concert venues.',
        image: '/images/projects/Rentify.png',
        tag: ['FE & BE'],
        stacks: ['Laravel', 'PHP', 'Vanilla CSS', 'MySQL'],
        gitUrl: 'https://github.com/mraihanfauzii/RentifyWeb',
        previewUrl: '/'
    },
    {
        id: 13,
        title: 'Seller Dashboard PaDi UMKM',
        description: 'This project is an assignment from DigistarClass, involving the task of remaking the seller dashboard website with suggested additional features. In this project, there are several features to retrieve various order data. The backend is built using NestJS.',
        image: '/images/projects/PaDiUMKM.png',
        tag: ['FE & BE'],
        stacks: ['NestJs', 'NodeJs', 'Javascript', 'MongoDB'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 14,
        title: 'E-Commerce API with Item from FakeStoreAPI',
        description: 'There are admin and customer roles, CRUD User, CRUD Item, CRUD Order, Postman Collection.',
        image: '/images/projects/E-CommerceAPI.png',
        tag: ['FE & BE'],
        stacks: ['ExpressJs', 'NodeJs', 'Javascript', 'MongoDB'],
        gitUrl: 'https://github.com/mraihanfauzii/E-Commerce-API-with-Item-from-FakeStoreAPI_Tugas-6-DigistarClass-BE',
        previewUrl: '/'
    },
    {
        id: 15,
        title: 'Flutter TMDB Clean Architecture',
        description: 'Aplikasi ini memiliki beberapa fitur diantaranya melihat film dan series tv terkini yang dipanggil dari TMDB API menggunakan Dio, melihat detailnya, melihat episode dari setiap series tv, menyimpan film dan tv series sebagai watchlist.',
        image: '/images/projects/tmdb.jpg',
        tag: ['Mobile'],
        stacks: ['Flutter', 'BLoC', 'Firebase Analytics & Crashlytics', 'Modularisasi', 'SQFLite', 'Dio', '95%+ Test Coverage', 'Continuous Integration dengan Github Action'],
        gitUrl: 'https://github.com/mraihanfauzii/TMDB-Flutter-Expert-Dicoding',
        previewUrl: '/'
    },
    {
        id: 16,
        title: 'Fruit Quality Classification using MobileNetV2',
        description: 'Proyek ini dibuat dengan tujuan membuat sistem klasifikasi gambar untuk mendeteksi apakah suatu buah itu masih layak konsumsi atau sudah tidak layak yaitu sudah busuk..',
        image: '/images/projects/fruit_quality_classification.jpg',
        tag: ['Machine Learning'],
        stacks: ['Computer Vision', 'Image Classification', 'MobileNetV2', 'CNN'],
        gitUrl: 'https://github.com/mraihanfauzii/Fruit-Quality-Classification',
        previewUrl: '/'
    },
    {
        id: 17,
        title: 'Predictive Analytics : Time Series Forecasting NVDA Stock using LSTM, GRU, CNN',
        description: 'Prediksi time series pada proyek ini tidak dimaksudkan sebagai satu-satunya acuan, melainkan sebagai indikator tambahan dalam strategi investasi. Metode ini juga dapat diterapkan ulang untuk saham lain dengan cara melatih ulang model menggunakan data harga saham yang ingin diprediksi.',
        image: '/images/projects/nvda_time_series_forecasting.jpg',
        tag: ['Machine Learning'],
        stacks: ['Time Series Forecasting', 'LSTM', 'GRU', 'CNN'],
        gitUrl: 'https://github.com/mraihanfauzii/Predictive-Analytics-Time-Series-Forecasting-NVDA-Stock',
        previewUrl: '/'
    },
    {
        id: 18,
        title: 'Membangun Sistem Machine Learning',
        description: 'Proyek ini bertujuan untuk mempelajari dan membuat Data Preprocessing dan Re-training otomatis menggunakan github action, Monitoring dan Logging menggunakan prometheus dan grafana',
        image: '/images/projects/msml.png',
        tag: ['Machine Learning'],
        stacks: ['Github Action', 'Prometheus', 'Grafana', 'Docker', 'Dagshub', 'Regression : House Price Prediction'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 19,
        title: 'HR Data Science Solution - Employee Attrition Analysis',
        description: 'Cakupan proyek ini meliputi analisis menyeluruh terhadap data historis karyawan PT Jaya Jaya Maju guna mengidentifikasi pola attrition dan faktor-faktor penyebabnya, pembuatan dashboard bisnis interaktif sebagai alat monitoring dan insight, pembangunan model machine learning sederhana untuk memprediksi attrition, serta rekomendasi tindakan strategis',
        image: '/images/projects/attrition_analysis.jpg',
        tag: ['Machine Learning'],
        stacks: ['Random Forest', 'Metabase','Supabase', 'Tensorflow'],
        gitUrl: 'https://github.com/mraihanfauzii/hr-data-science-solutions',
        previewUrl: '/'
    },
    {
        id: 20,
        title: 'Solving Educational Institution Problems with Data Science - Student Dropout Analysis',
        description: 'Cakupan proyek ini meliputi analisis menyeluruh terhadap data murid Jaya Jaya Institut guna mengidentifikasi pola dropout dan faktor-faktor penyebabnya, pembuatan dashboard bisnis sebagai alat monitoring dan insight, pembangunan model machine learning sederhana untuk memprediksi status(dropout/graduate/enrolled), serta rekomendasi tindakan strategis.',
        image: '/images/projects/dropout_analysis.jpg',
        tag: ['Machine Learning'],
        stacks: ['Random Forest', 'Metabase','Supabase', 'Streamlit', 'Tensorflow'],
        gitUrl: 'https://github.com/mraihanfauzii/student-dropout-prediction',
        previewUrl: 'https://student-dropout-prediction-mraihanfauzii.streamlit.app/'
    },
    {
        id: 21,
        title: 'Music Recommendation System using Content Based Filtering and Collaborative Filtering',
        description: 'Proyek ini berhasil menghadirkan sistem rekomendasi musik hybrid: TF‑IDF Cosine mengisi celah cold‑start, sedangkan RecommenderNet menyajikan rekomendasi personal dengan RMSE rendah. Perbandingan kedua pendekatan menunjukkan trade-off: Content-based menghasilkan rekomendasi yang sangat tepat sasaran secara kesamaan konten, namun mungkin kurang surprise. Collaborative filtering mampu menghasilkan rekomendasi yang lebih beragam dan personal, tetapi performa model sangat bergantung pada data..',
        image: '/images/projects/recommendation_system.jpg',
        tag: ['Machine Learning'],
        stacks: ['Recommendation System', 'Content Filtering(TF-IDF Cosine)', 'Collaborative Filtering(Recommender Net)'],
        gitUrl: 'https://github.com/mraihanfauzii/Music-Recommendation-System',
        previewUrl: '/'
    },
    {
        id: 22,
        title: 'Brazilian E-Commerce Analysis',
        description: 'Proyek ini bertujuan untuk menganalisis performa E-Commerce Brazil bernama Olist dengan menganalisa beberapa fitur penting kemudian dibuat juga RFM Analysis untuk menentukan beberapa tipe customer',
        image: '/images/projects/olist.png',
        tag: ['Machine Learning'],
        stacks: ['Step : Data Wrangling, EDA, Visualization, RFM Analysis'],
        gitUrl: 'https://github.com/mraihanfauzii/Brazilian_E-Commerce_Public_Dataset_Analysis',
        previewUrl: 'https://mraihanfauzii-brazilian-e-commerce-pu-dashboarddashboard-0lkl5b.streamlit.app/'
    },
    {
        id: 23,
        title: 'Sentiment Analysis Gopay App',
        description: 'Proyek ini bertujuan untuk menganalisis sentiment publik tentang aplikasi gopay yang didapat dari hasil scraping review aplikasi di playstore.',
        image: '/images/projects/sentiment_analysis.png',
        tag: ['Machine Learning'],
        stacks: ['Scraping', 'Sentiment Analysis', 'SVM + TF-IDF', 'LSTM', 'CNN', 'GRU', 'RF + TF-IDF'],
        gitUrl: 'https://github.com/mraihanfauzii/Sentiment-Analysis-GopayApp',
        previewUrl: '/'
    },
    {
        id: 24,
        title: 'Clustering and Classification on Bank Transaction Dataset',
        description: 'Proyek ini bertujuan untuk mengelompokan karakteristik nasabah bank menggunakan clustering dan kemudian dibuat model klasifikasi untuk memprediksi data baru untuk menentukan cluster nasabah. Proyek ini membandingkan beberapa model untuk menentukan model terbaik',
        image: '/images/projects/clustering.png',
        tag: ['Machine Learning'],
        stacks: ['Clustering', 'Classification', 'K-Means', 'DBScan', 'Agglomerative Clustering', 'Logistic Regression', 'Random Forest'],
        gitUrl: 'https://github.com/mraihanfauzii/Clustering-and-Classification-on-Bank-Transaction-Dataset',
        previewUrl: '/'
    },
    {
        id: 25,
        title: 'Aplikasi untuk Rehabilitasi Pasien Pasca Stroke',
        description: 'Proyek ini bertujuan untuk memudahkan pasien pasca stroke untuk dapat melakukan rehabilitasi dimana saja dengan bantuan teknologi yaitu dengan menggunakan machine learning dan mobile apps.',
        image: '/images/projects/rehab_app.jpg',
        tag: ['Mobile'],
        stacks: ['Flutter', 'Firebase', 'BLoC'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 26,
        title: 'Klasifikasi Gerakan untuk Rehabilitasi Pasien Pasca Stroke dengan CNN, GRU, LSTM',
        description: 'Proyek ini bertujuan untuk memudahkan pasien pasca stroke untuk dapat melakukan rehabilitasi dimana saja dengan bantuan teknologi yaitu dengan menggunakan machine learning dan mobile apps.',
        image: '/images/projects/rehab_app.jpg',
        tag: ['Machine Learning'],
        stacks: ['Klasifikasi', 'Object Detection', 'CNN', 'LSTM', 'GRU', 'Tensorflow', 'Yolo', 'Computer Vision'],
        gitUrl: '/',
        previewUrl: '/'
    },
    /**/
    {
        id: 27,
        title: 'Fullstack Campus Portal',
        description: 'Proyek ini dibuat untuk memenuhi kebutuhan sertifikasi BNSP Junior Web Developer dan saya berhasil lulus pada sertifikasi tersebut.',
        image: '/images/projects/campus-portal.png',
        tag: ['FE & BE'],
        stacks: ['Front-End', 'Back-End'],
        gitUrl: 'https://github.com/mraihanfauzii/campus-portal-fullstack',
        previewUrl: '/'
    },
    {
        id: 28,
        title: 'Fullstack Ecommerce',
        description: 'Multi-Vendor E-Commerce Marketplace adalah aplikasi web full-stack yang dibangun menggunakan Next.js (App Router), meniru fungsionalitas inti dari platform seperti Tokopedia atau Shopee. Proyek ini memungkinkan pengguna untuk mendaftar sebagai pembeli (Buyer) atau sebagai penjual (Seller) yang dapat membuka toko dan mengelola produk mereka sendiri.',
        image: '/images/projects/fullstack-ecommerce.png',
        tag: ['FE & BE'],
        stacks: ['Front-End', 'Back-End', 'Nextjs', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth'],
        gitUrl: 'https://github.com/mraihanfauzii/fullstack-ecommerce-jda',
        previewUrl: '/'
    },
    {
        id: 29,
        title: 'RAG Chatbot',
        image: '/images/projects/rag_chatbot.jpg',
        tag: ['Machine Learning'],
        stacks: ['Chatbot', 'RAG'],
        gitUrl: '/',
        previewUrl: '/'
    },
    /* */
    {
        id: 30,
        title: 'Front-End Story Web',
        description: '',
        image: '/images/projects/fullstack.WEBP',
        tag: ['FE & BE'],
        stacks: ['Front-End', 'React',],
        gitUrl: '/',
        previewUrl: '/'
    },
]

const ProjectsSections = () => {
    const [tag, setTag] = useState("Mobile")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [selectedProject, setSelectedProject] = useState(null);
    
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }


    const cardVariants = {
        initial: { y:50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Machine Learning" 
                    isSelected={tag === "Machine Learning"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="FE & BE" 
                    isSelected={tag === "FE & BE"}
                />
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
                                title={project.title}
                                stacks={project.stacks}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                showGitUrl={project.title !== "Seller Dashboard PaDi UMKM" && project.title !== "Klasifikasi Gerakan untuk Rehabilitasi Pasien Pasca Stroke dengan CNN, GRU, LSTM" && project.title !== "Aplikasi untuk Rehabilitasi Pasien Pasca Stroke"}
                                showPreviewUrl={false}
                            />
                        </div>
                    </motion.li>
                ))}
            </ul>

            {selectedProject && (
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

                    <h2 className="text-2xl font-bold text-center mb-4">{selectedProject.title}</h2>
                    <div className="flex justify-center mb-4">
                        <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="max-h-80 object-contain"
                        />
                    </div>
                    <p className="text-gray-200 mb-4">{selectedProject.description}</p>

                    {selectedProject.keyFeatures && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {selectedProject.keyFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedProject.keyTechnologies && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Key Technologies</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {selectedProject.keyTechnologies.map((technologies, i) => (
                                <li key={i}>{technologies}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedProject.myRole && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">My Role</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {selectedProject.myRole.map((myRole, i) => (
                                <li key={i}>{myRole}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedProject.projectBackground && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Project Background</h3>
                            <p>{selectedProject.projectBackground}</p>
                        </div>
                    )}

                    {selectedProject.gitUrl && selectedProject.gitUrl !== "/" && (
                    <a
                        href={selectedProject.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border rounded px-3 py-2 mt-2 hover:bg-white hover:text-black transition-colors"
                    >
                        View GitHub
                    </a>
                    )}
                </div>
                </div>
            )}
            
        </section>
    )
}

export default ProjectsSections