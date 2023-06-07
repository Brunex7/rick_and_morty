import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Detail.module.css';
import back from '../../media/back-svgrepo-com.svg';


export default function Detail (){

    const go2Home = () => {
      navigate('/home')
    } 
   
    const navigate = useNavigate()

    const {detailid} = useParams()

    const [character, setCharacter] = useState ({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailid}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailid]);


    return (
      <>
      <button className={style.but}>
         <img src={back} alt="back" onClick={go2Home}/>
      </button>
        <div className={style.container}>
            <img src={character.image} alt= {character.name}/>
            <div className={style.detail}>
            <h1>{character.name}</h1>
            <h4>{character.status} - {character.species}</h4>
            <p>Genres</p>
            <h2>{character.gender}</h2>
            <p>Location</p>
            <h2>{character.location?.name}</h2>
            </div>
        </div>
      </>
    )
}