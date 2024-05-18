import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieDetail from './components/MovieDetail';
import MovieListing from './components/MovieListing';

// import './App.scss'

const App = () => {
  
  return (
    <>
    <div className='app'>
        <NavBar/>
    
    <Routes>
        <Route path='/' element={<MovieListing/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
    </Routes>
    </div>
    </>
    
  )
}

export default App