import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css';


export default function Detail (){
    
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
        <div className={style.container}>
            <img src={character.image} alt= {character.name}/>
            <div className={style.detail}>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
            </div>
        </div>
    )
}