import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from './Typewriter'
import './index.scss'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer); // Proper cleanup
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a highly motivated and ambitious{' '}
            <Typewriter
              words={[
                'full-stack developer',
                'software engineer',
                'designer',
              ]}
              typingSpeed={150}
              pauseTime={2000}
            />
            {' '}passionate about creating elegant, user-friendly designs that bring
            ideas to life. I'm eager to join an innovative IT company where I
            can tackle exciting challenges and contribute to impactful projects
            using cutting-edge technologies.
          </p>
          <p align="LEFT">
            Curious by nature and constantly learning, I enjoy solving problems
            and refining my skills to deliver the best possible user experience.
          </p>
          <p>
            If I were to define myself in one sentence: I'm a dedicated learner,
            tech enthusiast, aspiring innovator, and a team player with a flair
            for leadership and creativity. Beyond coding, I'm an adventurer who
            loves sports, photography, and exploring the endless possibilities
            of technology!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
