import React, { useState } from 'react'
import './index.scss'

const InnovativeProjectList = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      title: 'Real Estate Price Prediction',
      description:
        'Developed a price prediction system for real estate using machine learning.',
      technologies: 'Python, Scikit-learn, Pandas',
      link: '',
    },
    {
      title: 'EMSystem',
      description: 'Employee Management System with admin and employee roles.',
      technologies: 'Java, MySQL, Spring Boot',
      link: 'https://github.com/zayan-mohamed/emsystem',
    },
    {
      title: 'Shopping-Cart',
      description: 'E-commerce shopping cart application with a modern UI.',
      technologies: 'React, Node, Express, MongoDB',
      link: 'https://github.com/zayan-mohamed/shopping-cart',
    },
    {
      title: 'Chatzooka',
      description:
        'Real-time chat app using Firebase for authentication and real-time messaging.',
      technologies: 'React, Firebase',
      link: 'https://github.com/zayan-mohamed/chatzooka',
    },
    {
      title: 'Pivot',
      description:
        'A project management tool for teams to collaborate and manage projects.',
      technologies: 'React, Next JS, TypeScript, AWS',
      link: 'https://github.com/zayan-mohamed/pivot',
    },
  ]

  const openModal = (project) => {
    setActiveProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setActiveProject(null)
  }

  return (
    <section id="projects-list">
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-card-back">
                <h3>Technologies</h3>
                <p>{project.technologies}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className={`project-modal ${modalOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              x
            </span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <p>
              <strong>Technologies:</strong> {activeProject.technologies}
            </p>
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default InnovativeProjectList
