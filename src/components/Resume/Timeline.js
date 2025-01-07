import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import './index.scss'

const Timeline = () => {
  const cardStyle = {
    backgroundColor: '#2c2f5c',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    padding: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: 'none', // Remove any borders
    outline: 'none', // Remove focus outlines
  }

  const hoverStyle = {
    transform: 'translateY(-5px)', // Slight hover lift
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.4)', // Stronger shadow on hover
  }

  return (
    <VerticalTimeline>
      {/* Education Section */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2027 (Expected)"
        iconStyle={{ background: '#4B49AC', color: '#fff' }}
        icon={<FaGraduationCap />}
      >
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h3 className="vertical-timeline-element-title">
            BSc. (Hons) in Data Science
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: '#98BDFF' }}
          >
            SLIIT University
          </h4>
          <p>CGPA: 3.23 (Year 2 Semester 2)</p>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020"
        iconStyle={{ background: '#4B49AC', color: '#fff' }}
        icon={<FaGraduationCap />}
      >
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Advanced Level (Commerce)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: '#98BDFF' }}
          >
            Zahira College Colombo
          </h4>
        </div>
      </VerticalTimelineElement>

      {/* Experience Section */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 March - 2024 September"
        iconStyle={{ background: '#F3797E', color: '#fff' }}
        icon={<FaBriefcase />}
      >
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h3 className="vertical-timeline-element-title">Trainee Associate</h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: '#98BDFF' }}
          >
            Legacy Health LLC, Colombo
          </h4>
          <p>
            Coordinated with U.S. insurance companies to process claims and
            secure reimbursements.
          </p>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Timeline
