import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from '../API/movieAPI'


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async ({term}) => {
        return fetch('localhost:8000/movies',{
            method:'POST',
            body:JSON.stringify({term})
        }).then((res) => res.Search)
//     const response = await movieAPI.get();
//     console.log(response);
//  return response.data.Search;
});

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
     async ({term}) => {
        return fetch('localhost:8000/movies',{
            method:'POST',
            body:JSON.stringify({term})
        })
//     const response = await movieAPI.get();
//     console.log(response);
//  return response.data.Search;
});

export const fetchAsyncDetails = createAsyncThunk(
    'movies/fetchAsyncDetails',
     async () => {

    const response = await movieAPI.get();
    console.log(response);
 return response.data;
});


const initialState = {
    moviesObject:[],
    showsObject:[],
    detailsObject:{},
};

const movieSlice = createSlice({
   name: 'movies',
   initialState,
   reducers:{
    addMovies: (state, {payload}) => {
        state.movies = payload;
    }
   },
   extraReducers:(builder)=>{
    builder
    .addCase(fetchAsyncMovies.pending,(state) =>{
        state.status = 'loading';
    })
    .addCase(fetchAsyncMovies.fulfilled,(state, {payload}) => {
        state.status = 'idle';
        state.moviesObject = payload;
    })
    .addCase(fetchAsyncMovies.rejected,(state) => {
        state.status = 'rejected'
    })
    .addCase(fetchAsyncShows.fulfilled,(state, {payload}) => {
        state.status = 'idle';
        state.showsObject = payload;
    })
    .addCase(fetchAsyncDetails.fulfilled,(state, {payload}) => {
        state.status = 'idle';
        state.detailsObject = payload;
    });
},

});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.moviesObject;
export default movieSlice.reducer;