import logo from './logo.svg';
import './App.css';
import Home from '../src/component/home/Home'
import { Route , Routes } from 'react-router-dom';
import Footer from '../src/component/Footer/Footer'
import Nav from '../src/component/Navbar/nav';
import Header from '../src/component/Header/Header';

import TourDetails from './component/TourDetails/TourDetails';
function App() {
  return (
    <div >
      <Nav />
      <Header />
      <Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/city/:id' element={<TourDetails />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
