import './Tours.css';
import Tour from '../Tours/tour/Tour'
const Data = require("../../data/db.json")

function Tours(){
    return(
<div class='tours'>

  {Data.map((tour)=>(
    <Tour tour={tour}/>
  ))}

       
</div>
    )
}


export default Tours;