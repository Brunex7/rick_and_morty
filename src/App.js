import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import NavBar from './components/NavBar'

function App () {
  return (
    <div className='App' style={{ padding: '0px' }}>
        <div>
          <NavBar/>
        </div>
      <div style={{ display:'flex', justifyContent:'space-around'}}>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
