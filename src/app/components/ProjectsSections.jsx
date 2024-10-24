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
        gitUrl: 'https://github.com/mraihanfauzii/DevLabs-User-Kotlin',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Fitnessist',
        description: 'This application is equipped with features such as exercises, food scanning with computer vision, steps based on selected programs, calorie counters, gamification, sports articles and healthy living tips, as well as user personalization.',
        image: '/images/projects/Fitnessist.png',
        tag: ['Mobile'],
        gitUrl: 'https://github.com/Fitnessist/fitnessist-mobile',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Movies To Go',
        description: 'This application is built with React Native and is a movie catalog application that fetches data from TheMovieDB API. It uses Firebase for authentication, includes a favorite feature, and uses the Google Map API to display cinema locations.',
        image: '/images/projects/MoviesToGo.png',
        tag: ['Mobile'],
        gitUrl: 'https://github.com/mraihanfauzii/MoviesToGo-ReactNative',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'Story App',
        description: 'TThere is an onboarding section introducing the application, created using Motion Layout. It includes authentication and live input error handling. It uses the Google Map API to view the location of the user submitting a story. The story list is loaded with RecyclerView and Paging 3. There is also basic testing implemented.',
        image: '/images/projects/StoryApp.png',
        tag: ['Mobile'],
        gitUrl: 'https://github.com/mraihanfauzii/StoryAPP_Kotlin',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'Jetpack Compose Movie App',
        description: 'This application is built with Jetpack Compose and serves as a movie catalog application.',
        image: '/images/projects/JetpackApp.png',
        tag: ['Mobile'],
        gitUrl: 'https://github.com/mraihanfauzii/JetpackComposeMovieApp',
        previewUrl: '/'
    },
    {
        id: 6,
        title: 'Warung Tani',
        description: 'Warung Tani is a marketplace that provides services in the form of intermediaries between farmers and consumers.',
        image: '/images/projects/Warung-Tani_Mobile.png',
        tag: ['Mobile'],
        gitUrl: 'https://github.com/mraihanfauzii/WarungTaniAPP_Flutter',
        previewUrl: '/'
    },
    {
        id: 7,
        title: 'Github API App',
        description: 'This application uses the GitHub API to search for GitHub profiles and view the following and followers of those profiles. It includes a favorite feature that is stored in the internal database, and there is also a feature to switch between dark and light themes.',
        image: '/images/projects/GithubApp.png',
        tag: ['Mobile'],
        gitUrl: 'https://github.com/mraihanfauzii/GitHubAPIAPP_Kotlin',
        previewUrl: '/'
    },
    {
        id: 8,
        title: 'My Portfolio Website',
        description: 'This website, developed with NextJS.',
        image: '/images/projects/MyPortfolioWebsite.png',
        tag: ['Front-End'],
        gitUrl: 'https://github.com/mraihanfauzii/web-portfolio',
        previewUrl: '/'
    },
    {
        id: 9,
        title: 'Warung Tani',
        description: 'Warung Tani is a marketplace that provides services in the form of intermediaries between farmers and consumers.',
        image: '/images/projects/Warung-Tani_Web.png',
        tag: ['Front-End'],
        gitUrl: 'https://github.com/mraihanfauzii/WarungTaniWebAndAPI',
        previewUrl: '/'
    },
    {
        id: 10,
        title: 'Rentify',
        description: 'Rentify is a web-based application that is used to book sports venues, music studios, ballrooms, and concert venues.',
        image: '/images/projects/Rentify.png',
        tag: ['Front-End'],
        gitUrl: 'https://github.com/mraihanfauzii/RentifyWeb',
        previewUrl: '/'
    },
    {
        id: 11,
        title: 'Seller Dashboard PaDi UMKM',
        description: 'This project is an assignment from DigistarClass, involving the task of remaking the seller dashboard website with suggested additional features. In this project, there are several features to retrieve various order data. The backend is built using NestJS.',
        image: '/images/projects/PaDiUMKM.png',
        tag: ['Back-End'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 12,
        title: 'E-Commerce API with Item from FakeStoreAPI',
        description: 'There are admin and customer roles, CRUD User, CRUD Item, CRUD Order, Postman Collection.',
        image: '/images/projects/E-CommerceAPI.png',
        tag: ['Back-End'],
        gitUrl: 'https://github.com/mraihanfauzii/tugas-6-digistarclass-be',
        previewUrl: '/'
    },
]

const ProjectsSections = () => {
    const [tag, setTag] = useState("Mobile")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y:50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Front-End" 
                    isSelected={tag === "Front-End"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Back-End" 
                    isSelected={tag === "Back-End"}
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
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            showGitUrl = {project.title !== 'Seller Dashboard PaDi UMKM'}
                            showPreviewUrl = {false}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSections