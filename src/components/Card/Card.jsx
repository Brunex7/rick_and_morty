import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={style.card}>

         <div className={style.imag}>
            <button className={style.closeButton} onClick={props.onClose}>X</button>
            <img src={props.image} alt={props.name} />
         </div>

         
            <Link className={style.name} to={'/detail/'+props.id}>
               <h2>{props.name}</h2>
            </Link>
         
      
         <div className={style.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         

      </div>
   );
}
