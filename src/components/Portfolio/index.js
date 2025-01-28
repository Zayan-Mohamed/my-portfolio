import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import ProjectDetails from '../ProjectDetails'
import {
  faReact,
  faNodeJs,
  faJs,
  faCss3,
  faHtml5,
  faJava,
  faAws,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { SiNextdotjs, SiPostgresql, SiFirebase, SiTypescript, SiTailwindcss } from 'react-icons/si'
import './index.scss'

const techIcons = {
  React: faReact,
  JavaScript: faJs,
  TypeScript: SiTypescript,
  TailWind: SiTailwindcss,
  Node: faNodeJs,
  CSS: faCss3,
  MongoDB: faDatabase,
  Express: faNodeJs,
  HTML: faHtml5,
  Firebase: SiFirebase,
  Java: faJava,
  AWS: faAws,
  'Next.js': SiNextdotjs,
  PostgreSQL: SiPostgresql, 
}

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      image: './emsystem.png',
      title: 'EMSystem',
      description:
        'A comprehensive Employee Management System for managing employees.',
      link: 'https://github.com/Zayan-Mohamed/my-portfolio.git',
      website: '#',
      technologies: ['Java', 'CSS', 'HTML'], // Fixed 'Java' to 'Java'
    },
    {
      image: './cart.png',
      title: 'Shopping-Cart',
      description:
        'A fully functional shopping cart with payment gateway integration.',
      link: 'https://github.com/Zayan-Mohamed/Shopping-Cart.git',
      website: '#',
      technologies: ['React', 'Node', 'MongoDB'], // Fixed 'Node.js' to 'Node'
    },
    {
      image: './chatzooka.png',
      title: 'Chatzooka',
      description:
        'A fully functional Chat Application using the MERN stack and Firebase',
      link: 'https://github.com/Zayan-Mohamed/Chatzooka.git',
      website: 'https://chatzooka.vercel.app/',
      technologies: ['React', 'Node', 'Firebase'], // Fixed 'Express.js' and 'Node.js'
    },
    {
      image: './pivot.png',
      title: 'Pivot',
      description:
        'A fully functional  Task Management Application using TypeScript and Next.js and Hosted in AWS Amplify, EC2 and RDS, with S3 for file storage.',
      link: 'https://github.com/Zayan-Mohamed/pivot.git',
      website: 'https://main.d2vvhs859yv4a5.amplifyapp.com/',
      technologies: ['Next.js', 'TypeScript', 'TailWind', 'PostgreSQL', 'AWS'],
    },
  ]

  const handleCardClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Projects'.split('')}
            idx={15}
          />
        </h1>
        <div className="card-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h2 className="project-title">
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={project.title.split('')}
                    idx={index * 10}
                  />
                </h2>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => {
                    const Icon = techIcons[tech] // Get the icon from techIcons
                    return Icon ? (
                      typeof Icon === 'function' ? ( // If Icon is a react-icon component
                        <Icon
                          key={i}
                          title={tech}
                          className="technology-icon"
                        />
                      ) : (
                        <FontAwesomeIcon
                          key={i}
                          icon={Icon}
                          title={tech}
                          className="technology-icon"
                        />
                      )
                    ) : (
                      <FontAwesomeIcon
                        key={i}
                        icon={faDatabase} // Default icon
                        title={tech}
                        className="technology-icon"
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={closeModal} />
      )}
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
