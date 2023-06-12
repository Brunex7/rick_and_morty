import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import random from '../../media/random-svgrepo-com.svg'
import hamburger from '../../media/menu-navigation-grid-1529-svgrepo-com.svg'
import close from '../../media/close-bold-svgrepo-com.svg'

export default function NavBar(props) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Define el ancho máximo para considerar como vista de escritorio
      };
  
      handleResize(); // Verificar el estado inicial al cargar la página
  
      window.addEventListener('resize', handleResize); // Agregar el event listener para detectar cambios de tamaño de pantalla
  
      return () => {
        window.removeEventListener('resize', handleResize); // Limpiar el event listener al desmontar el componente
      };
    }, []);
  
    const go2Home = () => {
      navigate('/home');
    };
  
    const generateRandomId = () => {
      const randomId = Math.floor(Math.random() * 600);
      props.onSearch(randomId.toString());
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className={`${style.NavContainer} ${isMenuOpen ? style.open : ''}`}>
        <img className={style.imag} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo" onClick={go2Home} />
          <SearchBar className={style.barra} onSearch={props.onSearch} />
        <button onClick={generateRandomId} className={style.but}>
          <img src={random} alt='aleatorio' />
        </button>
        {isMobile ? (
          <button onClick={toggleMenu} className={`${style.hamburgerButton} ${style.mobileOnly}`}>
            <img src={isMenuOpen ? close : hamburger} alt="Menu" />
            <div className={`${style.links} ${style.mobileOnly} ${isMenuOpen ? style.open : ''}`}>
              <Link to="/about">About</Link>
              <Link to="/">Log Out</Link>
            </div>
          </button>
        ) : (
          <div className={style.links}>
            <Link to="/about">About</Link>
            <Link to="/">Log Out</Link>
          </div>
        )}
      </nav>
    );
  }
