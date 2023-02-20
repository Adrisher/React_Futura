import axios from 'axios';


//Vamos hacer las peticiones a la Api 
// async quiere decir que app es asincrona, con await espera la respuesta

const allpersonajes = async (state) =>{
    const peticionGet_traerDatos = await axios.get(`https://rickandmortyapi.com/api/episode`)

    //imprimir la peticion en consola
    //dentro de data hay una propiedad results es donde esta todo los personajes y se vuelve en array
    // console.log(peticionGet_traerDatos.data.results)
    //estado que tiene un array con los personajes
    state(peticionGet_traerDatos.data.results)
}



const onePersonaje = async (id, state) => {
    const peticionGet_traerDatos = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    state(peticionGet_traerDatos.data)
}





//exportamos objeto que contiene la funcion el metodo

export{
    allpersonajes,
    onePersonaje
}

