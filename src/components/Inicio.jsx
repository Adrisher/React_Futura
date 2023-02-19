import React, { useEffect, useState } from "react";
import { allpersonajes } from "../functions/funciones";
import ReactHTMLTableToExcel from "react-html-table-to-excel";


//para utilizar esta funcion, con useEffect para cuando cargue el inicio cargue los personajes
//usestate para mostrar en pantalla 
const Inicio = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        allpersonajes(setPersonajes)
    }, [])
    return (
        <div className="contenedor">
            <br />
            <div align="center">
                <a href="./docupdf" target="_blank"><button className="btn btn-danger">PDF</button></a>
            </div>
            <div align="center">
                <ReactHTMLTableToExcel
                    id="botonExportarExcel"
                    className="btn btn-success mb-3"
                    table="api"
                    filename="futuraExcel"
                    sheet="futuraExcel"
                    buttonText="Exportar Excel"
                />
                <table className="table table-striped table-bordered table-hover table-dark" id="api">
                    <thead>
                        <tr>
                            <th className="th-lg"><a>ID</a></th>
                            <th className="th-lg"><a>Nombre</a></th>
                            <th className="th-lg"><a>Fecha</a></th>
                            <th className="th-lg"><a>Episodio</a></th>
                            <th className="th-lg"><a>Personajes</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {personajes != null ? (
                            personajes.map((personaje) => (
                                <tr>
                                    <th href="#" ><a href={`/personaje/${personaje.id}`}>{personaje.id}</a></th>
                                    <th href="#">{personaje.name}</th>
                                    <th href="#">{personaje.air_date}</th>
                                    <th href="#">{personaje.episode}</th>
                                    <th href="#">{personaje.characters}</th>
                                </tr>
                            ))
                        ) : ('no hay personajes')}
                    </tbody>
                </table >
            </div >
        </div>
    )
}

export default Inicio