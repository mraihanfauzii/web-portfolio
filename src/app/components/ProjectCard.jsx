import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({
    imgUrl,
    title,
    stacks = [],
    description,
    dateOrPublisher,
    type= [],
    gitUrl,
    previewUrl,
    showGitUrl,
    showPreviewUrl
  }) => {
    return (
      <div className="bg-[#181818] rounded-xl border border-gray-600 m-0 shadow-md 
                      hover:shadow-lg hover:-translate-y-1 hover:translate-x-1  
                      transition-all duration-300 cursor-pointer">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{
            background: `url(${imgUrl}) center/contain no-repeat`
          }}
        >
        </div>
  
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] px-4 mb-4">
            <h5 className="text-xl font-semibold mb-4">{title}</h5>
            {showGitUrl && (
            <div className="flex flex-wrap gap-2 mb-4">
                {stacks.map((stack, index) => (
                    <span
                    key={index}
                    className="bg-[#2A2A2A] text-sm text-center text-white py-1 px-3 rounded-full"
                    >
                    {stack}
                    </span>
                ))}
            </div>
            )}
            <p className="text-[#ADB7BE] text-justify">{description}</p>
            {dateOrPublisher && (
                <p className="text-[#ADB7BE] text-justify mb-5">{dateOrPublisher}</p>
            )}
            <div className="flex flex-wrap gap-2">
                {type.map((t, index) => (
                    <span
                        key={index}
                        className="bg-[#2A2A2A] text-sm text-white py-1 px-3 rounded-full"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;