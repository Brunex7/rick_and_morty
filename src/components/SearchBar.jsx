import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.barra}>
         <input type='search' name='search'id='' />
         <button onClick={()=>props.onSearch('id')}>BUSCAR</button> 
      </div>
   );
}

