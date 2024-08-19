'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { animate, motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: 'test 1',
        description: 'description 1',
        image: '/images/programmer.jpg',
        tag: ['Mobile'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'test 2',
        description: 'description 2',
        image: '/images/programmer.jpg',
        tag: ['Mobile'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'test 3',
        description: 'description 3',
        image: '/images/programmer.jpg',
        tag: ['Mobile'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'test 4',
        description: 'description 4',
        image: '/images/programmer.jpg',
        tag: ['Front'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'test 5',
        description: 'description 5',
        image: '/images/programmer.jpg',
        tag: ['Front'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 6,
        title: 'test 6',
        description: 'description 6',
        image: '/images/programmer.jpg',
        tag: ['Back'],
        gitUrl: '/',
        previewUrl: '/'
    }
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
        <section>
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
                    name="Front" 
                    isSelected={tag === "Front"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Back" 
                    isSelected={tag === "Back"}
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
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSections