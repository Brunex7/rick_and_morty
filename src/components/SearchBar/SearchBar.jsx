import { useState } from 'react';
import style from './SearchBar.module.css'
import search from '../../media/search-svgrepo-com.svg';

export default function SearchBar(props) {
   
   const [id, setId] = useState('');
   
   const handleChange = e =>{
      const{ value } = e.target;
      setId(value)
   }

   return (
      <div className={style.barra}>
         <input type='search' name='search' id='' onChange={handleChange} />
         <button onClick={() => props.onSearch(id)}>
            <img src={search} alt="buscar" />
         </button> 
      </div>
   );
}

