import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import LogoS from '../../../assets/images/logo-Z.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  const outlineLogoRefs = useRef([]) // Store all path refs in an array

  // Assign refs to each path
  const setOutlineRef = (el, index) => {
    outlineLogoRefs.current[index] = el
  }
  useEffect(() => {
    const timeline = gsap.timeline();
    const pathDuration = 12; // Duration for the outline animation
    const staggerDelay = 2; // Delay between each path animation
    const fadeInStart = pathDuration - 9; // Start solid logo fade-in near the end
  
    // Fade in the background
    timeline.to(bgRef.current, { duration: 0.2, opacity: 1 });
  
    // Animate each path in sequence
    outlineLogoRefs.current.forEach((path, index) => {
      const length = path.getTotalLength();
  
      // Set initial stroke styles
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
  
      // Animate stroke with staggered timing
      timeline.to(
        path,
        {
          strokeDashoffset: 0,
          duration: pathDuration, // Duration for each path animation
          ease: "power2.out",
        },
        index * staggerDelay // Stagger start times based on the index
      );
    });
  
    // Start fading in the solid logo near the end of the outline animation
    timeline.to(
      solidLogoRef.current,
      {
        opacity: 1, // Fade in the solid logo
        duration: 6, // Duration for fade-in
        ease: "power2.out",
      },
      fadeInStart // Start 1 second before the outline animation ends
    );
  
    return () => timeline.kill(); // Clean up the timeline
  }, []);
  
  
  

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="264px"
        height="442px"
        viewBox="0 0 596.46 502.06"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" className="svg-container">
          <path
             ref={(el) => setOutlineRef(el, 0)}
            className="cls-1"
            d="m200.73,213.01c-42.07,8.82-79.59,25.74-112.55,50.76-30.42,22.94-51.5,49.43-63.25,79.46,12.11-19.23,28.67-36.77,49.68-52.62,40.23-30.54,87.24-49.02,141.03-55.43-4.03-7.59-9-14.97-14.91-22.17Zm9.05,165.43c-30.43,34.59-59.77,51.89-88.04,51.89-15.31,0-22.96-8.29-22.96-24.88,0-8.51,2-17.93,6-28.29-13.05,21.39-19.57,39.76-19.57,55.12,0,16.59,7.65,24.89,22.96,24.89,28.27,0,57.61-17.3,88.04-51.9,16.99-19.32,29.23-38.56,36.73-57.73-6.36,10.28-14.08,20.58-23.16,30.9Zm78.55-279.85l-109.17,54.9c5.45,4.03,10.55,8.13,15.29,12.31l133.66-67.21h-39.78Zm70.91,179.57h-13.46c.39,2.65.59,6.7.59,12.16,0,19.18-3.54,37.71-10.62,55.6,13.38-21.57,21.21-44.16,23.49-67.76Z"
          />
          <path
             ref={(el) => setOutlineRef(el, 1)}
            className="cls-1"
            d="m348.45,206.08c-5.6-15.57-15.02-29.76-28.26-42.57-4.39-4.25-9.2-8.34-14.43-12.29l118.66-61.64c12.35-6.37,22.16-13.94,29.43-22.71,3.71-4.47,6.76-9.24,9.14-14.34,5.88-12.63,8.73-29.97,8.53-52.03H165.02l-44.46,71.26h221.12l-53.35,26.83h39.78l-133.66,67.21c15.24,13.41,26.82,27.6,34.76,42.55-9.71,1.16-19.21,2.71-28.48,4.66,5.91,7.2,10.88,14.58,14.91,22.17-53.79,6.41-100.8,24.89-141.03,55.43-21.01,15.85-37.57,33.39-49.68,52.62-5.92,15.13-9.47,31.16-10.65,48.08-1.57,25.63,5.88,45.95,22.37,60.94,16.49,14.99,38.57,22.48,66.25,22.48,58.89,0,115.61-20.83,170.18-62.5,27.35-20.92,48.24-43.03,62.67-66.31,7.08-17.89,10.62-36.42,10.62-55.6,0-5.46-.2-9.51-.59-12.16h13.46c.47-4.85.7-9.74.7-14.67,0-5.47-.2-9.52-.59-12.16h181.37c17.4,0,31.17-6.14,41.3-18.41,5.76-6.97,10.34-15.92,13.76-26.84h-247.33Zm-115.51,141.46c-7.5,19.17-19.74,38.41-36.73,57.73-30.43,34.6-59.77,51.9-88.04,51.9-15.31,0-22.96-8.3-22.96-24.89,0-15.36,6.52-33.73,19.57-55.12,7-18.1,20.11-39.02,39.34-62.77,11.58-14.32,27.48-27.71,47.7-40.15,21.39-13.39,40.63-21.02,57.71-22.91,2.54,3.77,4.21,7.07,5,9.9.59,4.52.88,9.24.88,14.14,0,23.94-7.49,48-22.47,72.17Z"
          />
          <path
             ref={(el) => setOutlineRef(el, 2)}
            className="cls-1"
            d="m194.45,165.8l-28.87,14.52c14.08,10.4,25.8,21.3,35.15,32.69,9.27-1.95,18.77-3.5,28.48-4.66-7.94-14.95-19.52-29.14-34.76-42.55Zm60.96,109.57c0-4.9-.29-9.62-.88-14.14-.79-2.83-2.46-6.13-5-9.9-17.08,1.89-36.32,9.52-57.71,22.91-20.22,12.44-36.12,25.83-47.7,40.15-19.23,23.75-32.34,44.67-39.34,62.77,6.82-11.16,15.41-23.14,25.77-35.94,11.58-14.32,27.48-27.71,47.7-40.15,21.39-13.38,40.63-21.02,57.7-22.91,2.55,3.78,4.22,7.07,5.01,9.9.59,4.53.88,9.24.88,14.14,0,15.07-2.96,30.18-8.9,45.34,14.98-24.17,22.47-48.23,22.47-72.17Zm17.67,136.86c-54.57,41.67-111.29,62.5-170.18,62.5-27.68,0-49.76-7.49-66.25-22.48-16.49-14.99-23.94-35.31-22.37-60.94,1.18-16.92,4.73-32.95,10.65-48.08-14.24,22.63-22.32,47.6-24.23,74.91-1.56,25.64,5.89,45.95,22.38,60.94,16.49,14.99,38.57,22.48,66.25,22.48,58.88,0,115.61-20.83,170.18-62.49,37.66-28.81,63.08-59.87,76.24-93.15-14.43,23.28-35.32,45.39-62.67,66.31ZM123.73,71.76l-16.74,26.83h181.34l53.35-26.83H123.73Zm300.69,17.82l-118.66,61.64c5.23,3.95,10.04,8.04,14.43,12.29l90.66-47.1c18.64-9.61,31.5-21.96,38.57-37.04,1.75-3.75,3.22-7.92,4.43-12.5-7.27,8.77-17.08,16.34-29.43,22.71Zm157.6,143.34c-10.13,12.27-23.9,18.41-41.3,18.41h-181.37c.39,2.64.59,6.69.59,12.16,0,4.93-.23,9.82-.7,14.67h167.91c27.28,0,45.63-15.08,55.05-45.24h-.18Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
