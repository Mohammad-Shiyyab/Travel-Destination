import './Home.css';
import Header from '../Header/Header';
import Tour from '../Tours/Tours'
import Footer from '../Footer/Footer'

const Data = require('../../data/db.json')

function Home(){
    return(
        <div class="Header">
        <Header />

{Data.map((val)=> (
    <Tour value={val.price} name={val.name} img={val.image} info={val.info}/>
))}
<Footer />
     


        </div>
    )
}


export default Home;