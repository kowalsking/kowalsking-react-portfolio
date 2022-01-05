import './App.scss'
import background from './img/bgi.jpg'
import FirstLine from './components/home/FirstLine.jsx'
import SecondLine from './components/home/SecondLine'

function App () {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <FirstLine />
      <SecondLine />
    </div>
  )
}

export default App
