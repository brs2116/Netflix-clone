import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Header/Navbar'
import et_en from "../../assets/Image/ET-en.jpg"
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import InfoIcon from "@mui/icons-material/Info";
function Home() {
  return (
    <div className='home'>
   <Navbar/>
   <div className='et_en'>
   <img src={et_en} alt="" className='banner-img' />
    <div className='et-caption'> 
    <p>
      Discover his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy.
    </p>
    <div className="et-btns"><button className='btn'> <SmartDisplayIcon />Play</button>
    <button className='btn dark-btn'> <InfoIcon/> more Info</button></div>
   </div>
   </div>
  

</div>
  );
}

export default Home
