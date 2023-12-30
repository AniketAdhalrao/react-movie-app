import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopRated() {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);

    const nextPage = ()=>{
        if(page < 452)
          setPage(page+1);
        else
          setPage(1);
    }

    const prevPage = ()=>{
        if(page > 1)
          setPage(page-1);
        else
          setPage(452)
    }
     
    const showMovie = (id) =>{
         localStorage.setItem("movieId", id); 
         navigate("/showMovie");
    }
  
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page="+page)
        .then((resp) => resp.json())
        .then((data) => {
            setMovies(data.results);
        })
       
    },[page]);
 return (
    <div>
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {movies.map((movie,index) => (
          <div key={movie.id} className={`product-container bg-${index % 6 + 1}`}>
            <div className="product-border">
              <div className="product-content">
                <div className="product-image">
                  <img className="img-thumbnail product-image-border"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    style={{ width: "250px", height: "auto" }}
                    onClick={()=>showMovie(movie.id)}/>
                </div>
                    <div className="product-details">
                      <div className="product-name">
                        <strong>{movie.original_title}</strong> <br/>
                        <strong>Rating :</strong> {movie.vote_average}
                      </div>
                    </div>
              </div>
            </div> 
          </div>
        ))}
      <div>
    </div>
    </div>
    </div>
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <button className="btn btn-dark mr-2" onClick={prevPage}>
          Prev
        </button>

        <button className="btn btn-dark" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  </div>
 )
    
}
