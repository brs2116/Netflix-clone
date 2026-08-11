import React, { useEffect, useRef, useState } from 'react'
import "./TitleCard.css";
import { Link } from 'react-router-dom';
function TitleCard({title,catagory}) {


  const [apiData, setapiData] = useState([]);
  const cardRef= useRef()
 const options = {
  method: "GET",
  headers: {
    accept: "application/json",
   
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTYzNTg1NjE5MWEwODFiODU0NTlmZTljMWEwZTk0ZiIsIm5iZiI6MTc4NjM4MjE2MC4wODcwMDAxLCJzdWIiOiI2YTdhMDc1MDEyYzgyNGZjODFiOTkyOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d87tDnx27F4oVvEjXGhIwqGdjxZSbPfdwEfheDdplQo',
  },
};

  
const handleWheel = (event) => {
  event.preventDefault();
  if (cardRef.current) {
    cardRef.current.scrollLeft += event.deltaY;
  }
};

  useEffect(()=>{
    fetch(
      `https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results))
      .catch((err) => console.error(err));
    
  },[]) 

   useEffect(() => {
     const currentCard = cardRef.current;
     if (currentCard) {
       currentCard.addEventListener("wheel", handleWheel);
       return () => {
         currentCard.removeEventListener("wheel", handleWheel);
       };
     }
   }, []);
  return (
    <div className='title-card' >
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef} >
        {apiData.map((card,index)=>{return (
        
          <Link to = {`/play/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt=""
            />
            <p>{card.original_title}</p>
          </Link>
          );
        
        })}
      </div>
    </div>
  )
}

export default TitleCard
