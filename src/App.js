import './App.scss'
import background from './img/bgi.jpg'

function App () {
  console.log('top')

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      hello world
    </div>
  )
}

export default App
