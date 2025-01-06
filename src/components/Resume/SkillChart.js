import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const SkillChart = () => {
  const data = {
    labels: [
      'Python',
      'JavaScript',
      'Java',
      'React',
      'SQL',
      'Data Visualization',
    ],
    datasets: [
      {
        label: 'Skill Proficiency',
        data: [85, 80, 75, 70, 65, 60],
        backgroundColor: 'rgba(121, 120, 233, 0.2)',
        borderColor: '#7978E9',
        borderWidth: 2,
        pointBackgroundColor: '#4B49AC',
      },
      {
        label: 'Developed This Year',
        data: [90, 85, 80, 75, 70, 65],
        backgroundColor: 'rgba(44, 62, 80, 0.2)',
        borderColor: '#26A69A',
        borderWidth: 2,
        pointBackgroundColor: '#00796B',
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: '#eee' },
        grid: { color: '#ddd' },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { position: 'top' },
    },
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      {/* Inline container styles */}
      <div style={{ width: '100%', maxWidth: '550px' }}>
        {' '}
        {/* Inline radar chart styles */}
        <Radar data={data} options={options} />
      </div>
    </div>
  )
}

export default SkillChart
