import './Tour.css';
import { Link } from 'react-router-dom';
function Tour({tour : {id,name,info,price,image}}){
    return(
    <Link to={`/city/${id}`}>
<div class='tours'>
            <div class="card">
            <img class='img' src={image} alt="image not found" />
            <div class="container">
            <h1>{name}</h1> 
            </div>
            </div>
       
</div>
</Link>
    )
}


export default Tour;