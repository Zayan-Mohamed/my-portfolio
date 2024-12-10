import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import MyPhoto from '../../assets/images/Zimage.png'
import GradientBackground from '../GSAP/GradientBackground'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const photoAreaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_zxw500q',
        'template_zh7wc7k',
        form.current,
        '4xzfpfgkb660M9D1d'
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
                    SEND
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Zayan Mohamed,
          <br />
          Colombo, Sri Lanka,
          <br />
          Dias Place, Colombo  <br />
          <span>itsm.zayan@gmail.com</span>
        </div> */}
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

        {/* <div className="map-wrap">
          <MapContainer
            center={[6.9368027, 79.8580053]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.9368027, 79.8580053]}>
              <Popup>Let's meet and discuss amazing ideas over coffee!</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact