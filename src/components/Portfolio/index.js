import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import ProjectDetails from '../ProjectDetails'
import emsystem from '../../assets/images/emsystem.png'
import cart from '../../assets/images/shopping-cart.png'
import chatzooka from '../../assets/images/chatzooka.png'
import {
  faReact,
  faNodeJs,
  faJs,
  faCss3,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const techIcons = {
  React: faReact,
  JavaScript: faJs,
  TypeScript: faJs,
  Node: faNodeJs,
  CSS: faCss3,
  MongoDB: faDatabase,
  Express: faNodeJs,
  HTML: faHtml5,
  Firebase: faDatabase,
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
      image: emsystem,
      title: 'EMSystem',
      description:
        'A comprehensive Employee Management System for managing employees.',
      link: 'https://github.com/Zayan-Mohamed/my-portfolio.git',
      website: 'https://example.com/emsystem',
      technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
      image: cart,
      title: 'Shopping-Cart',
      description:
        'A fully functional shopping cart with payment gateway integration.',
      link: 'https://github.com/Zayan-Mohamed/Shopping-Cart.git',
      website: 'https://example.com/shopping-cart',
      technologies: ['TypeScript', 'React', 'Node'], // Fixed 'Node.js' to 'Node'
    },
    {
      image: chatzooka,
      title: 'Chatzooka',
      description:
        'A fully functional Chat Application using the MERN stack and Firebase',
      link: 'https://github.com/Zayan-Mohamed/Chatzooka.git',
      website: 'https://chatzooka.vercel.app/',
      technologies: ['MongoDB', 'Express', 'React', 'Node', 'Firebase'], // Fixed 'Express.js' and 'Node.js'
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
                  {project.technologies.map((tech, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={techIcons[tech] || faDatabase}
                      title={tech}
                      className="technology-icon"
                    />
                  ))}
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
