import './App.scss'
import background from './img/bgi.jpg'
import FirstLine from './components/FirstLine.jsx'

function App () {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <FirstLine />
    </div>
  )
}

export default App
