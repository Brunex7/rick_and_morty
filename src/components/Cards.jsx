import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (<div>
      {characters.map((c , i)=>{
         return(
            <Card
            key = {i}
            name = {c.name}
            species = {c.species}
            gender = {c.gender}
            image = {c.image}
            />
         )
      })}
   </div>);
}
