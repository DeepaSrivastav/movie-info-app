import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from '../API/movieAPI'
import { APIKey } from '../API/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async (term) => {
    const response = await movieAPI.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    console.log(response);
 return response.data.Search;
});

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
     async (term) => {

    const response = await movieAPI.get(`?apiKey=${APIKey}&s=${term}&type=series`);
    console.log(response);
 return response.data.Search;
});

export const fetchAsyncDetails = createAsyncThunk(
    'movies/fetchAsyncDetails',
     async (id) => {

    const response = await movieAPI.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
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