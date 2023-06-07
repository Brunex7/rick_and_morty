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
            <p>"Rick and Morty App" es una aplicación impresionante que permite a los fans de la popular serie de televisión explorar información detallada sobre los personajes de Rick and Morty. Con una interfaz de usuario intuitiva y atractiva, esta aplicación brinda una experiencia única para sumergirse en el fascinante universo de Rick Sanchez y su nieto Morty.</p>

            <p>Una de las mejores características de "Rick and Morty App" es su integración perfecta con la API de Rick and Morty. Gracias a JavaSacrict y React, la aplicación puede realizar solicitudes a la API y recuperar datos actualizados sobre los personajes más recientes. Esto garantiza que los usuarios siempre tengan acceso a la información más actualizada sobre su serie favorita.</p>

            <p>Utilizando componentes de React, la interfaz de usuario responde de manera rápida y eficiente a las interacciones del usuario, brindando una experiencia de usuario fluida y sin problemas.</p>

            <p>Además, el diseño visual de "Rick and Morty App" es increible y minimalista. Se utilizó module.css para aplicar estilos a los componentes de React, lo que permitió crear una interfaz de usuario atractiva y coherente en todo momento. Los colores vibrantes y las animaciones sutiles enriquecen la experiencia del usuario y le dan vida al mundo de Rick and Morty.</p>

            <p>La aplicación también cuenta con funciones de búsqueda y busqueda aleatoria, lo que facilita a los usuarios encontrar personajes específicos. Además, cada elemento muestra detalles importantes, como el estado del personaje, el número de episodios en los que aparece y una breve descripción, lo que permite a los fans profundizar en la historia y los detalles del universo de Rick and Morty</p>

            <p>En resumen, "Rick and Morty Explorer" es una aplicación destacada que aprovecha la API de Rick and Morty para brindar a los fans una experiencia interactiva y enriquecedora. Con JavaSacrict, React y module.css, se logró crear una aplicación de alta calidad con una interfaz de usuario atractiva, navegación fluida y acceso rápido a la información actualizada. Si eres un verdadero fan de Rick and Morty, ¡esta aplicación es imprescindible para ti!"</p>
        </div>
        </>
    )
}