import { NavLink } from "react-router-dom";
import '../Header/Header.css'
export const Header=()=>{
        return(
        <nav className= "Header">
                <ul className = "Nav">
                <li className="HomeLink"><NavLink to="/">Home</NavLink></li>
                <li className="HomeLink"><NavLink to = "/catalog">Catalog</NavLink></li>
                <li className="HomeLink"><NavLink to = "/favorites">Favorites</NavLink></li>
             </ul> 
             </nav>
        )
}