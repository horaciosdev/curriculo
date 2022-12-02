import '../styles/components/progressbar.sass'

function ProgressBar({ percentage = 0, color = "#fff" }) {
  return (
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: percentage, backgroundColor: color }}>{percentage}</div>
      </div>
  )
}

export default ProgressBar