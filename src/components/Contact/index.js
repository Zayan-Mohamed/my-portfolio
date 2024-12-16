import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import MyPhoto from '../../assets/images/Zimage.png'
import GradientBackground from '../GSAP/GradientBackground'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(false) // Loading state for form submission
  const form = useRef()
  const photoAreaRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert('Message successfully sent!')
          form.current.reset()
        },
        () => {
          alert('Failed to send the message. Please try again later.')
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm open to collaboration and freelance opportunities. Feel free to
            reach out for projects, questions, or just to say hello using the
            form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">
                    {loading ? 'Sending...' : 'SEND'}
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="photo-area" ref={photoAreaRef}>
          <GradientBackground targetRef={photoAreaRef} />
          <img src={MyPhoto} alt="Zayan Mohamed" className="profile-photo" />
          <div className="photo-overlay">
            <p>
              Zayan Mohamed
              <br />
              Colombo, Sri Lanka
              <br />
              Email: itsm.zayan@gmail.com
            </p>
          </div>
        </div>
      </div>
      {loading && <Loader type="pacman" />} {/* Loader shown when the form is submitting */}
    </>
  )
}

export default Contact
