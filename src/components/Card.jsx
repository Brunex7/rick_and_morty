import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.container}>
         <div className={style.buttContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         <div className={style.name}>
            <h2>{props.name}</h2>
         </div>
            <img className={style.imag}  src={props.image} alt={props.name} />
         <div className={style.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
