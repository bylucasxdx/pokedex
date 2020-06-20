import axios from 'axios';

const pokemonApi = axios.create({
    baseURL: 'http://192.168.0.100:4444'
});

export default pokemonApi;