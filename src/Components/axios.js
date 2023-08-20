import axios from "axios"


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  
})
 //instance.get("/movie/top_rated");
 
// https://api.themoviedb.org/3/movie/top_rated

export default instance;
 
//Hosting URL: https://netflix-clone-best-movie.web.app