import axios from 'axios';

const API_URL = 'http://localhost:8000';

export default class AnimesService{

    getAnimes(){
        const url = `${API_URL}/api/animes/`;
        return axios.get(url).then(response => response.data);
    }

    createAnime(anime){
        const url = `${API_URL}/api/animes/`;
        return axios.post(url, anime).then(response => response.data);
    }

    updateAnime(anime){
        const url = `${API_URL}/api/animes/${anime.id}/`;
        return axios.put(url, anime).then(response => response.data);
    }
    deleteAnime(anime){
        const url = `${API_URL}/api/animes/${anime.id}/`;
        return axios.delete(url);
    }
}