import React from "react";
import style from './About.module.css';
import { useNavigate } from "react-router-dom";
import back from '../../media/back-svgrepo-com.svg';

export default function About (){

    const navigate = useNavigate()

    const go2Home = () => {
        navigate('/home')
    } 

    return (
        <>
        <div>
            <h1>About</h1>
            <button className={style.but}>
                <img src={back} alt="back" onClick={go2Home}/>
            </button>
        </div>
        <div className={style.cont}>
            <p>"Rick and Morty App" es una aplicación creada con JavaScript y React que le permite a los fans de la popular serie de televisión explorar información detallada sobre los personajes de Rick and Morty. La interfaz de usuario es intuitiva y atractiva lo que genera una mejor navegación.</p>

            <p>Una de las mejores características de "Rick and Morty App" es su integración perfecta con la API de Rick and Morty. Gracias a JavaScrict y React, la aplicación puede realizar solicitudes a la API y recuperar datos actualizados sobre los personajes más recientes. Esto garantiza que los usuarios siempre tengan acceso a la información más actualizada sobre su serie favorita.</p>

            <p>Utilizando componentes de React, la interfaz de usuario responde de manera rápida y eficiente a las interacciones del usuario, brindando una experiencia de usuario fluida y sin problemas.</p>

            <p>Además, el diseño visual de "Rick and Morty App" es minimalista y atractivo, ya que se busco simplificar la imagen visual de la página. Se utilizó module.css para aplicar estilos a los componentes de React, lo que permitió crear una interfaz de usuario atractiva y coherente en todo momento.</p>

            <p>La aplicación cuenta con funciones de búsqueda por ID y busqueda aleatoria. Además, cada elemento muestra detalles importantes, como el estado del personaje, el lugar de origen y su genero.</p>

            <h2>Este proyecto fue llevado a cabo durante el Bootcamp de soyHenry con el objetivo de profundizar y practicar el uso de React y JavaScript, así como aplicar estilos con CSS puro a los componentes. En este proyecto, desempeñé el rol de desarrollador front-end, lo que me permitió adquirir experiencia a través de la participación en mini proyectos.</h2>
        </div>
        </>
    )
}