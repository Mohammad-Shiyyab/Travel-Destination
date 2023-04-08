import './Tours.css';
import data from '../../data/db.json'
function Tour(){
    return(
<div class='tours'>
        {data.map((moh)=>(
            <div class="card">
            <img class='img' src={moh.image} alt="image not found" />
            <div class="container">
            <h1>{moh.name}</h1> 
            <h3>{moh.info}</h3> 
            <h4>{moh.price}</h4>
            </div>
            </div>
        ))}
</div>
    )
}


export default Tour;