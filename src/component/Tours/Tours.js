import './Tours.css';

function Tour(props){
    console.log(props)
    return(
<div class='tours'>
        
            <div class="card">
            <img class='img' src={props.img} alt="image not found" />
            <div class="container">
            <h1>{props.name}</h1> 
            <h3>{props.info}</h3> 
            <h4>{props.price}</h4>
            </div>
            </div>
       
</div>
    )
}


export default Tour;