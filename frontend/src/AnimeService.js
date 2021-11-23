import axios from 'axios';

const API_URL = 'http://localhost:8000';

export default class AnimesService{
    constructor(){}

    getAnimes(){
        const url = `${API_URL}/api/animes/`;
        return axios.get(url).then(response => response.data);
    }

    createAnime(anime){
        const url = `${API_URL}/api/animes/`;
        return axios.post(url, anime).then(response => response.data);
    }
}