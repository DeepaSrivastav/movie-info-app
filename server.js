const PORT =8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.listen(8000,()=>{
    console.log(`Server is running on port ${PORT}`)
});

app.get('/movies',(req,res)=>{
    var search = req.query.term;
    console.log(req);

    const options = {
        method: 'GET',
        url:`http://www.omdbapi.com/?apiKey=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`
    }

 axios.request(options).then((response) => {
    res.json(response.data);
 }).catch((error) =>{
   console.log(error);
 })
});

app.get('/shows',(req,res)=>{
    var search = req.query.term;
    const options = {
        method: 'GET',
        url:`http://www.omdbapi.com/?apiKey=${process.env.REACT_APP_API_KEY}&s=${search}&type=series`
    }

 axios.request(options).then((response) => {
    res.json(response.data);
 }).catch((error) =>{
   console.log(error);
 })
})
