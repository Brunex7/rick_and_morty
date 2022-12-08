import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar(props){

    const navigate = useNavigate()

    const go2Home = () => {
        navigate('/home')
    }
    

    return(
        <nav className={style.NavContainer}>
            <img className={style.imag} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo" onClick={go2Home}/>
            <div className={style.barra}>
                <SearchBar onSearch={props.onSearch} />
            </div>
            <div className={style.links}> 
                <a href="/about">About</a>      
            </div>        
        </nav>

    )
}