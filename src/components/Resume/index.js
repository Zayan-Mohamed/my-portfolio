import React, { useState, useEffect } from 'react'
import { Link, Element } from 'react-scroll'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import SkillChart from './SkillChart'
import Timeline from './Timeline'
import ProjectCard from './ProjectCard'
const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const Divider = () => (
    <div className="divider">
      <div className="stripes"></div>
    </div>
  )

  return (
    <>
      <div className="container resume-page" id="scroll-container">
        <div className="page-title">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Resume'.split('')}
              idx={15}
            />
          </h1>
        </div>

        <nav className="resume-nav">
          <ul>
            <li>
              <Link
                to="education-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="scroll-container"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="experience-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="scroll-container"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="scroll-container"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                containerId="scroll-container"
              >
                Skills
              </Link>
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1ETowQrEp_muGc_a-nsk44ZdT4hRRnnVG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            download="Zayan_Mohamed_CV"
            className="flat-button"
          >
            My Resume
          </a>
        </nav>

        <div className="resume-content">
          <div className="resume-left">
            <Element name="education-section">
              {/* Timeline Section */}
              <section className="timeline-section">
                <h2>Education & Experience</h2>
                <Timeline />
              </section>
            </Element>
            <Divider />

            <Element name="projects-section">
              <section id="projects-section">
                <h2>Projects</h2>
                <ProjectCard />
              </section>
            </Element>
            <Divider />

            <Element name="skills-section">
              {/* Skill Chart Section */}
              <section className="skills-section">
                <h2>Skills</h2>
                <SkillChart />
              </section>
            </Element>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Resume
