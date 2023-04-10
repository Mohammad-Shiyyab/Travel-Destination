import './nav.css';
import { Link } from 'react-router-dom';
function Nav(){
    
    return(
        <Link to={"/"}>
        <div class="nav">
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li ><a class="active" href="#about">About</a></li>
            <li><a class="active" href="#contact">Contact</a></li>
          </ul>
    </div>
    </Link>
    )
}


export default Nav;