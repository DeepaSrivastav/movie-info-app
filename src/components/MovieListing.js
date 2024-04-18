import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../common/settings.js';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movieSlice';
import MovieCard from './MovieCard.js';
import '../styles/MovieListing.css'

const MovieListing = () => {
 
  const dispatch = useDispatch();
  useEffect(()=>{
    const movieText = 'Harry';

    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(movieText));
  
  },[dispatch])

  const movies = useSelector(state=>state.movies.moviesObject);
  console.log(movies);
  
  const shows = useSelector(state=>state.movies.showsObject);
  return (
    <>
    <div className='movie-container'>
       <h2>Movies</h2>
       
     <div className='card-container'>
     <Slider {...settings}>
      {movies.map((movie) => (
      
       <div className='movie-card'>
        <Link to={`/movie/${movie.imdbID}`}>
         <div className='card-top'>
            <img src={movie.Poster} alt={movie.Title}/>
         </div>
         </Link>
         <div className='card-bottom'>
           <h4>{movie.Title}</h4>
           <p>{movie.Year}</p>
         </div>
       </div>
       
      ))
       } </Slider>  
     </div> 
     
    {/* <ul>
      {
        movies.map((movie)=>(<li key={movie.imdbID}>{movie.Title}</li>))
      }
    </ul> */}
    </div>

<div className='movie-container'>
<h2>Shows</h2>
<div className='card-container'>
<Slider {...settings}>
{shows.map((show) => (

<div className='movie-card'>
 <Link to={`/movie/${show.imdbID}`}>
  <div className='card-top'>
     <img src={show.Poster} alt={show.Title}/>
  </div>
  </Link>
  <div className='card-bottom'>
    <h4>{show.Title}</h4>
    <p>{show.Year}</p>
  </div>
</div>
))
}  </Slider> 
</div> 
{/* <ul>
{
 movies.map((movie)=>(<li key={movie.imdbID}>{movie.Title}</li>))
}
</ul> */}
</div>

</>
    
    
  )
}

export default MovieListing