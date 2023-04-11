import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../../data/db.json"

function TourDetails(){
    const [details,setDetails] = useState(false)
    const {id} = useParams();
    const moreInfo = Data.find((tour) => id===tour.id);
    const navigate = useNavigate()
    const showInfo =() =>{
        setDetails(navigate('/'))
    }
    console.log(showInfo)

return(
    <>
        <div class='tours'>
            <div class="card">
            <img class='img' src={moreInfo.image} alt="image not found" />
            <div class="container">
            <h1>{moreInfo.name}</h1> 
            <p>
                <span>{moreInfo.info}</span><br></br>
                <button  onClick={showInfo}>{showInfo ? 'show less' : 'show more'}</button>
                
            </p>
            <p>{moreInfo.price}</p>
            </div>
            </div>
       
</div>

    </>
)

}

export default TourDetails;