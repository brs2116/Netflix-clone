import React ,{useState ,useEffect} from "react";
import "./Player.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

function Player() {

const {id}=useParams();
const navigate=useNavigate();
  const [apiData, setapiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });
   
   const options = {
    method: "GET",
    headers: {
      accept: "application/json",
     
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTYzNTg1NjE5MWEwODFiODU0NTlmZTljMWEwZTk0ZiIsIm5iZiI6MTc4NjM4MjE2MC4wODcwMDAxLCJzdWIiOiI2YTdhMDc1MDEyYzgyNGZjODFiOTkyOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d87tDnx27F4oVvEjXGhIwqGdjxZSbPfdwEfheDdplQo',
    },
  };
   useEffect(()=>{
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options,
      )
        .then((res) => res.json())
        .then((res) => setapiData(res.results[0]))
        .catch((err) => console.error(err));
      
    },[]) 
  return (
    <div className="player">
      <div
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
        className="back-arrow-div"
      >
        <ArrowBackIcon />
      </div>
      <iframe
        src="https://www.youtube.com/embed/${apiData.key}"
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
