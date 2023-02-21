import axios from 'axios';

const allpersonajes = async (state) => {
    const peticionGet_traerDatos = await axios.get(`https://rickandmortyapi.com/api/episode`)
    state(peticionGet_traerDatos.data.results)
}

const onePersonaje = async (id, state) => {
    const peticionGet_traerDatos = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    state(peticionGet_traerDatos.data)
}

export {
    allpersonajes,
    onePersonaje
}

