import axios from "axios";

const movieBDPetitions = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "YOUR_API_KEY",
        language: "es-ES"
    }
});


export default movieBDPetitions;