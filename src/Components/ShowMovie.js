import React, { useEffect, useState } from 'react'
import "../Style.css";
export default function ShowMovie() {

    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {

        var movieId = localStorage.getItem("movieId");

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
          .then((resp) => resp.json())
          .then((data) => {
            setMovie(data);
            if (data.genres)
              {
                setGenres(data.genres.map((genre) => genre.name));
              } 
            else 
              {
                setGenres([]);
              }
          })
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
          .then((resp) => resp.json())
          .then((data) => {
             setCast(data.cast);
          })
      }, []);

  return (
    <div>
    <div
      className="movie-details-container"
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}
    >
      <div className="overlay">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div className="movie-info">
          <h2>{movie.original_title}</h2>
          <p><span><button className="btn btn-outline-light">{movie.runtime+" min"}</button></span>{"  "+genres.join(',')}</p>
          <p>Release Date : {movie.release_date}</p>
          <div>
        <h4>Overview</h4>
        <p>
        <p>{movie.overview}</p>
        </p>
        </div>
        </div>
        
      </div>
      
    </div>
    <div className="movie-cast-container">
      <h2>Movie Cast</h2>
      <div className="cast-list">
        {cast.map((actor) => (
          <div key={actor.id} className="cast-item">
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={`${actor.name} profile`}
              className="cast-image"
            />
            <div className="cast-info">
              <p className="cast-name">{actor.name}</p>
              <p className="cast-character">{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
