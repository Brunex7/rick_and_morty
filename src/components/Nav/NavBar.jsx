import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import random from '../../media/random-svgrepo-com.svg'

export default function NavBar(props){

    const navigate = useNavigate()

    const go2Home = () => {
        navigate('/home')
    }

    const generateRandomId = () => {
        const randomId = Math.floor(Math.random() * 600);
        props.onSearch(randomId.toString());
    };
      

    return(
        <nav className={style.NavContainer}>
            <img className={style.imag} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo" onClick={go2Home}/>
            <div className={style.barra}>
                <SearchBar onSearch={props.onSearch} />
            </div>
            <button onClick={generateRandomId} className={style.but} >
                <img src={random} alt='aleatorio'/>
            </button>   
            <div className={style.links}> 
                <Link to="/about">About</Link>      
                <Link to="/">Log Out</Link>   
            </div>      
        </nav>

    )
}