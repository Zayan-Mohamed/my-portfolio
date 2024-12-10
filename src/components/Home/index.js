import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-Z.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false) // New state for animation control

  const nameArray = ['a', 'y', 'a', 'n', ' ', 'F', 'a', 'i', 's', 'a', 'l']
  const jobTitles = [
    ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'],
    ['d', 'a', 't', 'a', ' ', 'a', 'n', 'a', 'l', 'y', 's', 't'],
    [
      'f',
      'u',
      'l',
      'l',
      ' ',
      's',
      't',
      'a',
      'c',
      'k',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
    ],
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const jobChangeInterval = setInterval(() => {
      setTransitioning(true) // Start transition
      setTimeout(() => {
        setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
        setTransitioning(false) // End transition after delay
      }, 500) // Match this duration with the animation time
    }, 4000) // Change job every 4 seconds

    return () => clearInterval(jobChangeInterval)
  }, [jobTitles.length])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <div
              className={`job-title ${
                transitioning ? 'fade-out-in' : ''
              }`} // Add animation class dynamically
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobTitles[currentJobIndex]}
                idx={15}
              />
            </div>
          </h1>
          <h2>Undergraduate / Web Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
