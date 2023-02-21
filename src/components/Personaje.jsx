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
                    <h3> Nombre: {personajes.name}</h3>
                    <h3> Fecha: {personajes.air_date}</h3>
                    <h3> Episodio: {personajes.episode}</h3>
                    <h3> Personajes: {personajes.characters}</h3>
                </div>
            ) : ('no hay personajes')}
        </>
    )
}

export default Personaje