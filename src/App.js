import Body from "./components/Body/Body";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"

import yamaha from "./Images/yamaha_mt7.png"
import kawasaki from "./Images/kawasakiversys.png"
import moto1 from "./Images/moto1.jpeg"
import MotorcyclesReservation from './components/Motorcycles/MotorcyclesReservation'
function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Routes>
      <Route path="/" element={<> <Hero /> <Body /></>} />
      <Route path="/Yamha-MT7" element={<MotorcyclesReservation imagini={[yamaha]} name={<>YAMAHA <span className='text-[#F9844A]'> MT7 </span></>} preturi={["50","40","35"]} an="2018" cp="80" rezervor="14" cmc="690" garantie="400"  />} />
      <Route path="/Kawasaki-versys" element={<MotorcyclesReservation  imagini={[kawasaki,moto1]} name={<>KAWASAKI<span className='text-[#F9844A]'> VERSYS </span></>} preturi={["65","55","50"]} an="2012" cp="64" rezervor="19" cmc="650" greutate="90" garantie="400"  />} />
    </Routes>
  
    </div>
  );
}

export default App;
