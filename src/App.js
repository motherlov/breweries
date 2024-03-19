
import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import ListBreweries from './Component/ListBreweries/ListBreweries';
import BreweriesSingle from './Component/BreweriesSingle/BreweriesSingle';
import By_City from './Component/By_City/By_City';
import AutoComplete from './Component/AutoCompelete';
//import Footer from './ShareModel/Footer/Footer';
import NavBar from './ShareModel/NavBar/NavBar';
import Location from './Component/Location/Location';
import State from './Component/State/State';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<ListBreweries/>} />
      <Route path="/breweries/:id" element={<BreweriesSingle/>} />
      <Route path="/city" element={<By_City/>} />
      <Route path="/auto" element={<AutoComplete/>} />
      <Route path="/location" element={<Location/>} />
      <Route path="/state" element={<State/>} />
     </Routes>
     {/* <Footer/> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
