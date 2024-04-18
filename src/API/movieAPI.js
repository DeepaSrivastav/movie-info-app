import axios from 'axios';

export default axios.create({
    baseURL:"http://www.omdbapi.com/",
    // params:{
    //     key:'53c800d',
    // }
})
