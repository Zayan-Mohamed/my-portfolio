import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
            href="https://drive.google.com/file/d/1R9wS7SxYuITSzLEEJkdy_uWAby_jguux/view?usp=sharing"
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
              <section id="education-section">
                <h2>Education</h2>
                <p>
                  BSc. (Hons) in Data Science, SLIIT University <br /> Year 2
                  Semester 1, CGPA: 3.185
                </p>
                <hr />
                <p>G.C.E. Advanced Level (Commerce), Zahira College Colombo</p>
                <hr />
                <p>G.C.E. Ordinary Level, Al-Hikma College Colombo</p>
              </section>
            </Element>

            <Element name="experience-section">
              <section id="experience-section">
                <h2>Experience</h2>
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
            </Element>

            <Element name="projects-section">
              <section id="projects-section">
                <h2>Projects</h2>
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
            </Element>

            <Element name="skills-section">
              <section id="skills-section">
                <h2>Skills</h2>
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
            </Element>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Resume;
