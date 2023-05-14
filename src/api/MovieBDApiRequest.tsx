import axios from "axios";

const movieBDPetitions = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "7dc3d19035cfc2bf656e4aa6cff39ced",
        language: "es-ES"
    }
});


export default movieBDPetitions;