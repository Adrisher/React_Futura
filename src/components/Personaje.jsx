import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onePersonaje } from "../functions/funciones";
import 'bootstrap/dist/css/bootstrap.min.css';

const Personaje = () => {

    const [personajes, setPersonaje] = useState(null)
    const params = useParams();
    useEffect(() => {
        onePersonaje(params.id, setPersonaje)
    }, [])
    return (
        <>
            {personajes != null ? (
                <div>
                    <h2> ID del personaje {personajes.id}</h2>
                    <p> Nombre: {personajes.name}</p>
                    <p> Fecha: {personajes.air_date}</p>
                    <p> Episodio: {personajes.episode}</p>
                    <p> Personajes: {personajes.characters}</p>
                </div>
            ) : ('no hay personajes')}
        </>
    )
}

export default Personaje