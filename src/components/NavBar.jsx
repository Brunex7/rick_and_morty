import style from './NavBar.module.css'
import SearchBar from './SearchBar'
export default function NavBar(){
    return(
        <nav className={style.NavContainer}>
            <img className={style.imag} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo" />
            <div className={style.barra}>
                <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
            </div>
            <div className={style.links}>
                <a href="/">Home</a>   
                <a href="/">Favorite</a>   
                <a href="/">Blog</a>   
            </div>        
        </nav>

    )
}