import React, { useState, useEffect } from "react";
import "./Player.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import movieTrailer from "movie-trailer";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTYzNTg1NjE5MWEwODFiODU0NTlmZTljMWEwZTk0ZiIsIm5iZiI6MTc4NjM4MjE2MC4wODcwMDAxLCJzdWIiOiI2YTdhMDc1MDEyYzgyNGZjODFiOTkyOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d87tDnx27F4oVvEjXGhIwqGdjxZSbPfdwEfheDdplQo",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => {
        setMovieTitle(data.title);
        
        searchTrailer(data.title);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load movie");
        setLoading(false);
      });
  }, [id]);

  const searchTrailer = (title) => {
    setSearching(true);
    setLoading(false);

    movieTrailer(title)
      .then((url) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");
          setTrailerUrl(videoId);
          setSearching(false);
          setError(null);
        } else {
          setSearching(false);
          setError("No trailer found");
        }
      })
      .catch((error) => {
        console.error("Trailer search error:", error);
        setSearching(false);
        setError("Could not find trailer");
      });
  };

  const handleRetry = () => {
    if (movieTitle) {
      setError(null);
      setSearching(true);
      searchTrailer(movieTitle);
    }
  };

  if (loading) {
    return (
      <div className="player loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

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

      {searching && (
        <div className="searching-container">
          <div className="loading-spinner">
            Searching YouTube for trailer...
          </div>
        </div>
      )}

      {trailerUrl ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&rel=0`}
          width="90%"
          height="90%"
          title="Movie Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      ) : (
        !searching && (
          <div className="no-trailer">
            <p>🎬 {error}</p>
            <button onClick={handleRetry} className="retry-btn">
              🔄 Try Again
            </button>
          </div>
        )
      )}

      <div className="player-info">
        <h3>{movieTitle || "Movie"}</h3>
        {trailerUrl && (
          <div className="trailer-status">Trailer found on YouTube</div>
        )}
      </div>
    </div>
  );
}

export default Player;
