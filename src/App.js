import Body from "./components/Body/Body";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"

import yamaha from "./Images/yamaha_mt7.png"
import kawasaki from "./Images/kawasakiversys.png"
import moto1 from "./Images/moto1.jpeg"
import bmw from './Images/bmwR1200.png'
import MotorcyclesReservation from './components/Motorcycles/MotorcyclesReservation'
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Routes>
      <Route path="/" element={<> <Hero /> <Body /> <Footer /></>} />
      <Route path="/Yamaha-MT07" element={<MotorcyclesReservation imagini={[yamaha]} name={<>YAMAHA <span className='text-[#F9844A]'> MT07 </span></>} preturi={["70","55"]}  an="2017" cp="80" rezervor="14" cmc="690" greutate="179" garantie="400" transmisie="6" autonomie="280 - 320" abs="standard" inaltime="805" />} />
      <Route path="/Kawasaki-versys" element={<MotorcyclesReservation  imagini={[kawasaki,moto1]} name={<>KAWASAKI<span className='text-[#F9844A]'> VERSYS </span></>} preturi={["60","50"]} an="2014" cp="64" rezervor="19" cmc="650" greutate="181" garantie="500" transmisie="6"  autonomie="320 - 360" abs="standard" inaltime="840" topCase={true} />} />
      <Route path="/BMW-r1200gs" element={<MotorcyclesReservation  imagini={[bmw]} name={<>BMW<span className='text-[#F9844A]'> R1200GS ADVENTURE </span></>} preturi={["90","75"]} descriere="Motocicleta care te duce in locuri fara cod postal" an="2007" cp="100" rezervor="33" cmc="1170" greutate="223" garantie="700" transmisie="6" autonomie="300 - 340" abs="standard" inaltime="895" topCase={true} gentiLaterale={true} />} />
    </Routes>
  
    </div>
  );
}

export default App;
