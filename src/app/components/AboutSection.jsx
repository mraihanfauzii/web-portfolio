'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const SKILLS_DATA = [
    {
        title: "Mobile Application Development",
        language:"Kotlin, Flutter, React Native",
        totalDuration: "2 Years Experience (11 Months Work Experience)"
    },
    {
        title: "Machine Learning",
        language:"Image Classification, System Recommender, Sentiment Analysis, Data Science, Regression, Time Series Forecasting, Clustering",
        totalDuration: "1+ Years Experience"
    },
    {
        title: "Front-End Web Development",
        language:"HTML, CSS, Javascript, Next JS",
        totalDuration: "1+ Years Experience"
    },
    {
        title: "Back-End Web Development",
        language:"Express JS, Nest JS, Laravel",
        totalDuration: "1+ Years Experience"
    },
    {
        title: "UI/UX",
        totalDuration: "5 Months Experience"
    }
]

const EXPERIENCE_DATA = [
    {
        image: "/images/logo/aws.png",
        title: "Cloud Computing Cohort - AWS re/Start Batch 12",
        institution: "Amazon Web Services x Orbit Future Academy",
        date: "July - Oct 2025",
        totalDuration: "4 months"
    },
    {
        image: "/images/logo/elevaite.png",
        title: "Azure AI Engineer Cohort",
        institution: "Microsoft ElevAIte",
        date: "May - Aug 2025",
        totalDuration: "4 months"
    },
    {
        image: "/images/logo/laskar_ai.png",
        title: "AI Engineer & Data Scientist Cohort",
        institution: "Laskar AI by Lintasarta, Dicoding, NVIDIA",
        date: "Feb - July 2025",
        totalDuration: "5 months"
    },
    {
        image: "/images/logo/telkom_university.png",
        title: "Software Engineering Lecturer Assistant",
        institution: "Telkom University",
        date: "Oct 2024 - Jan 2025",
        totalDuration: "4 months"
    },
    {
        image: "/images/logo/digistar_club.png",
        title: "Back-End Mentee of Digistar Class",
        institution: "Digistar Club by Telkom Indonesia",
        date: "Aug - Sep 2024",
        totalDuration: "2 months"
    },
    {
        image: "/images/logo/telkom_indonesia.png",
        title: "Mobile Engineer Intern",
        institution: "Telkom Indonesia",
        date: "Apr - Sep 2024",
        totalDuration: "6 months"
    },
    {
        image: "/images/logo/telkom_university.png",
        title: "Software Engineering Lecturer Assistant",
        institution: "Telkom University",
        date: "Oct 2023 - Jan 2024",
        totalDuration: "4 months"
    },
    {
        image: "/images/logo/telkom_indonesia.png",
        title: "Mobile Engineer Intern",
        institution: "Telkom Indonesia",
        date: "Aug - Des 2023",
        totalDuration: "5 months"
    },
    {
        image: "/images/logo/bangkit.png",
        title: "Mobile Development Learning Path",
        institution: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        date: "Feb - Jul 2023",
        totalDuration: "6 months"
    }
]

const ORGANIZATIONS_DATA = [
    {
        image: "/images/logo/motion_lab.png",
        title: "Head of Publication, Decoration, and Documentation of MotionHack 3.0",
        institution: "Mobile Innovation Laboratory",
        date: "Mar - Apr 2024",
        totalDuration: "2 months"
    },
    {
        image: "/images/logo/motion_lab.png",
        title: "Head of Public Relations (Laboratory Assistant)",
        institution: "Mobile Innovation Laboratory",
        date: "Aug 2023 - Aug 2024",
        totalDuration: "13 months"
    },
    {
        image: "/images/logo/motion_lab.png",
        title: "Research Member (Mobile Programmer)",
        institution: "Mobile Innovation Laboratory",
        date: "Nov 2022 - Feb 2023",
        totalDuration: "4 months"
    },
    {
        image: "/images/logo/hima_if.png",
        title: "Creative Bureau Staff & Secretary",
        institution: "Himpunan Mahasiswa S1 Informatika Telkom University",
        date: "Apr 2022 - Mar 2023",
        totalDuration: "12 months"
    },
    {
        image: "/images/logo/hima_if.png",
        title: "Interfest Publication & Creative Staff",
        institution: "Himpunan Mahasiswa S1 Informatika Telkom University",
        date: "Sep - Des 2022",
        totalDuration: "4 months"
    },
    {
        image: "/images/logo/ase_lab.png",
        title: "Research Member (Game Programmer)",
        institution: "Advanced Software Engineering Laboratory",
        date: "Apr - Okt 2022",
        totalDuration: "7 months"
    },
]

const HONOR_AWARDS_DATA = [
    {
        image: "/images/logo/pikiran-terbaik-negeri.png",
        title: "Top 10 from 649 Products (Semifinalist) at Pikiran Terbaik Negeri Hackathon 2025",
        institution: "Yayasan BUMN",
        monthYear: "Aug 2025"
    },
    {
        image: "/images/logo/elevaite.png",
        title: "1st Place in Microsoft ElevAIte Hackathon Hub Telkom University 2025",
        institution: "Microsoft Indonesia",
        monthYear: "Jun 2025"
    },
    {
        image: "/images/logo/itfest.png",
        title: "3rd Place in Hackathon ITFest",
        institution: "Himavo Micro IT & GDSC IPB University",
        monthYear: "Sep 2024"
    },
    {
        image: "/images/logo/icodsa.png",
        title: "Author and Presenter",
        institution: "The 7th International Conference on Data Science and Its Applications (ICoDSA)",
        monthYear: "Jul 2024"
    },
    {
        image: "/images/logo/search.png",
        title: "3rd Place in JBC Business Plan Competition",
        institution: "Search Telkom University",
        monthYear: "Sep 2022"
    },
    {
        image: "/images/logo/centennialz.png",
        title: "The 5 Best Project Plans Award in Z Future Leader",
        institution: "CentennialZ",
        monthYear: "Sep 2021"
    }
]

function renderSkills() {
    return (
      <div>
        {SKILLS_DATA.map((skill, idx) => (
          <div key={idx} className={`flex flex-row gap-3 items-center py-4
            ${idx < SKILLS_DATA.length - 1 ? "border-b border-gray-600" : ""}
          `}>
            <div className="flex flex-col">
                <h3 className="font-semibold text-base mb-1">{skill.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{skill.language}</p>
                <p className="text-sm text-gray-400 mb-1">
                    {skill.totalDuration}
                </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  function renderExperiences(dataArray) {
    return (
        <div>
          {dataArray.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-row gap-3 items-center py-4
                ${idx < dataArray.length - 1 ? "border-b border-gray-600" : ""}
              `}
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{item.institution}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <span >{item.date}</span>
                  <span>•</span>
                  <span>{item.totalDuration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  
  function renderHonorsAwards() {
    return (
      <div>
        {HONOR_AWARDS_DATA.map((award, idx) => (
          <div key={idx} className={`flex flex-row gap-3 items-center py-4
            ${idx < HONOR_AWARDS_DATA.length - 1 ? "border-b border-gray-600" : ""}
          `}>
            <div className="flex-shrink-0">
              <Image
                src={award.image}
                alt={award.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">{award.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{award.institution}</span>
                  <span>•</span>
                  <span>{award.monthYear}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: renderSkills()
    },
    {
      title: "Experience",
      id: "experience",
      content: renderExperiences(EXPERIENCE_DATA)
    },
    {
      title: "Organizations",
      id: "organizations",
      content: renderExperiences(ORGANIZATIONS_DATA)
    },
    {
      title: "Honors & Awards",
      id: "award",
      content: renderHonorsAwards()
    }
  ];

const AboutSection = () => {
    const [tab, setTab] = useState('experience')
    const [isPending, startTransition] = useTransition()
    const [isLoading, setIsLoading] = useState(true);

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'  id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div>
                  {isLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-opacity-60">
                      <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin" />
                    </div>
                  )}
                  <Image src='/images/programmer.jpg' width={700} height={700} onLoadingComplete={() => setIsLoading(false)}/>
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg [text-align:justify]'>
                    I am a fresh graduate in Informatics from Telkom University with a strong academic background and a deep passion for software engineering. Proficient in mobile development and machine learning, I have hands-on experience building various mobile, web, and machine learning based projects. Motivated, results-oriented, and eager to contribute in a challenging role where I can apply my skills to create meaningful impact.
                    </p>
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 mt-5">
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                        {' '}
                            Skills{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
                        {' '}
                            Experience{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('organizations')} active={tab === 'organizations'}>
                        {' '}
                            Organizations{' '}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('award')} active={tab === 'award'}>
                        {' '}
                            Awards{' '}
                        </TabButton>
                    </div>
                    <div className='mt-2'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection