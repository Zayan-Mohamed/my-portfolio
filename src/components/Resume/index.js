import { React, useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeSection, setActiveSection] = useState('education') // Default section

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleNavClick = (section) => {
    setActiveSection(section) // Set the active section when a nav link is clicked
  }

  return (
    <div className="container resume-page">
      <div className="page-title">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Resume'.split('')}
            idx={15}
          />
        </h1>
      </div>

      {/* Top Navigation Bar */}
      <nav className="resume-nav">
        <ul>
          <li>
            <a href="#education" onClick={() => handleNavClick('education')}>
              Education
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => handleNavClick('experience')}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleNavClick('projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleNavClick('skills')}>
              Skills
            </a>
          </li>
        </ul>

        {/* Download CV Button */}
        <a
          href="https://drive.google.com/file/d/1R9wS7SxYuITSzLEEJkdy_uWAby_jguux/view?usp=sharing"
          target='_blank'
          rel='noreferrer'
          download="Zayan_Mohamed_CV"
          className="flat-button"
        >
          My Resume
        </a>
      </nav>

      {/* Content with Two Columns */}
      <div className="resume-content">
        <div className="resume-left">
          <section
            id="education"
            style={{
              display: activeSection === 'education' ? 'block' : 'none',
            }}
          >
            <h2>Education</h2>
          </section>
          <section
            id="experience"
            style={{
              display: activeSection === 'experience' ? 'block' : 'none',
            }}
          >
            <h2>Experience</h2>
          </section>
          <section
            id="projects"
            style={{ display: activeSection === 'projects' ? 'block' : 'none' }}
          >
            <h2>Projects</h2>
          </section>
          <section
            id="skills"
            style={{ display: activeSection === 'skills' ? 'block' : 'none' }}
          >
            <h2>Skills</h2>
          </section>
        </div>

        <div className="resume-right">
          <section
            id="education"
            style={{
              display: activeSection === 'education' ? 'block' : 'none',
            }}
          >
            <p>
              BSc. (Hons) in Data Science, SLIIT University <br /> Year 2
              Semester 1, CGPA: 3.185
            </p>
            <hr />
            <p>G.C.E. Advanced Level (Commerce), Zahira College Colombo</p>
            <hr />
            <p>G.C.E. Ordinary Level, Al-Hikma College Colombo</p>
          </section>
          <section
            id="experience"
            style={{
              display: activeSection === 'experience' ? 'block' : 'none',
            }}
          >
            <p>
              <b>Trainee Associate</b> <br /> <i>Legacy Health LLC, Colombo</i>
            </p>
            <p>
              Coordinated with U.S. insurance companies to process claims and
              secure reimbursements for Legacy Health physicians in the
              Emergency Room of Texas, ensuring compliance and resolving issues
              efficiently.
            </p>
            <hr />
          </section>
          <section
            id="projects"
            style={{ display: activeSection === 'projects' ? 'block' : 'none' }}
          >
            <p>
              <b>Real Estate Price Prediction Project — Python</b>
              <br />
              Developed a data science project to build a real estate price
              prediction website.
            </p>
            <hr />
            <p>
              <b>EMSystem — Java, MySQL Workbench</b>
              <br />
              Designed and developed a professional Employee Management System
              with role-based access for admins and employees.
            </p>
            <hr />
            <p>
              <b>Shopping-Cart</b>
              <br />
              Designed and developed an online shopping store web application
              using MERN stack.
            </p>
          </section>
          <section
            id="skills"
            style={{ display: activeSection === 'skills' ? 'block' : 'none' }}
          >
            <p>
              Programming Languages: Python, Java, C/C++, HTML, JavaScript, CSS,
              .NET
            </p>
            <p>Data Analysis Tools: SQL, Power BI, Jupyter Notebooks</p>
            <p>Machine Learning Frameworks: TensorFlow, React</p>
            <p>
              Other Skills: Database Management, Data Cleansing, Data
              Visualization, Version Control (Git)
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume
