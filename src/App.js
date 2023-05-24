import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NavBar from './components/Nav/NavBar';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Landing from './components/Landing/Landing';


function App () {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const username = 'prueba@gmail.com';
  const password = 'hola123';

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate ('/')
  },[access])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            if(!isRepit(data.id)){
              setCharacters((oldChars) => [...oldChars, data]);
            }else{
              window.alert('No se puede repertir ese personaje')
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const isRepit = (id) => {
    let aux = false;
    characters.forEach((char)=>{
      if (char.id === id) aux = true
    })
    return aux;
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const location = useLocation();

  return (
    <div className='App' style={{ padding: '0px' }}>
        {location.pathname === '/' ? <Landing login={login} /> : <NavBar onSearch ={onSearch}/>}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailid' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
