import React, { useEffect } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncDetails } from '../features/movieSlice';
import '../styles/MovieDetail.scss'
import '../styles/MovieDetail.css'
const MovieDetail = () => {
  const style={color:"orange"}
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies.detailsObject)
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
  },[dispatch, imdbID])
  return (
    <>
    <div className='movie-section'>
        <div className='left-section'>
          <div className='movie-title'>{data.Title}</div>
          <div className='movie-rating'>
            <span>
              IMDB Rating <i className='fa fa-star'></i>:{''}
              {data.imdbRating}
            </span>
            <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
            <span>
              Runtime <i className='fa fa-film'></i> : {data.Runtime}
            </span>
            <span>
              Year <FaCalendarAlt style={style} /> : {data.Year}
            </span>
          </div>
          <div className='movie-Plot'>{data.Plot}</div>
          <div className='movie-info'>
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className='right-section'>
           <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </>
  )
}

export default MovieDetail