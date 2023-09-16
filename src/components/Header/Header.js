import { NavLink } from "react-router-dom";
import '../Header/Header.css'
export const Header=()=>{
        return(
        <nav className= "Header">
                <ul className = "Nav">
                <li ><NavLink className="HomeLink" to="/">Home</NavLink></li>
                <li ><NavLink className="HomeLink" to = "/catalog">Catalog</NavLink></li>
                <li className="HomeLink"><NavLink className="HomeLink" to = "/favorites">Favorites</NavLink></li>
             </ul> 
             </nav>
        )
}