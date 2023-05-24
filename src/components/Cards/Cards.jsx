import Card from '../Card/Card';
import style from './CardsContainer.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={style.container}>
      {characters.map(character => (
            <Card
            key = {character.id}
            id = {character.id}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            onClose = {() => onClose(character.id)}
            />
         ))}
   </div>
);
}
