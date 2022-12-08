import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


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
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt= {character.name}/>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
            <h1>{character.gender}</h1>
            <h1>{character.origin?.name}</h1>
        </div>
    )
}