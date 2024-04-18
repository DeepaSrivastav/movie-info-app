import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movieSlice';

const NavBar = () => {
  let [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (term === '') return alert('Please enter search term!');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    console.log(term);
    setTerm('');
  }
  return (
    <div className='nav-bar'>
     <div className='home-link'>
      <Link to='/'>
         Movie App
      </Link>
      </div> 
     <div className='search-bar'>
      <form onSubmit={SubmitHandler}>
      <input type='text' value={term} onChange={(e)=> setTerm(e.target.value)} placeholder='Search for a movie or a show'/>
      <button type='submit' className='sumit-button'>
      <i class="fa fa-search"></i>
       {/* <img src='../images/download.png'/> */}
      </button>
      
      </form>  
      
    </div> 

      
    </div>
  )
}

export default NavBar