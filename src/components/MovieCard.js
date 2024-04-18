import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const {data} = props
  return (
    <>
     <h2>Movies</h2>
    <div className='card-container'>
     <Link to={`/movie/${data.imdbID}`}>
      <div className='movie-card'>
        <div className='card-top'>
            <img src={data.Poster} alt={data.Title}/>
        </div>
      </div>
      </Link>
    </div>
    </>
   
 )
}

export default MovieCard