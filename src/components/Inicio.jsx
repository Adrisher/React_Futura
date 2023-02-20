import React, { useEffect, useState } from "react";
import { allpersonajes } from "../functions/funciones";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useNavigate } from 'react-router-dom';
import PDFGenerador from "./PDFGenerador";


//para utilizar esta funcion, con useEffect para cuando cargue el inicio cargue los personajes
//usestate para mostrar en pantalla 
const Inicio = ({ }) => {

    const [personajes, setPersonajes] = useState(null);

    useEffect(() => {
        allpersonajes(setPersonajes);
    }, [])

    const navigate = useNavigate();
    const confirm = () => {
        navigate('/pdf');
    }

    return (
        <div className="contenedor">
            {/* <div>
                <h1>Tabla de datos</h1>
                <PDFGenerador data={data} />
            </div> */}
            <br />
            <div align="center">
                <button onClick={confirm} className="btn btn-danger" >Descargar PDF</button>
            </div>
            <br />
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
                            <th className="th-lg"><a href="!#" >ID</a></th>
                            <th className="th-lg"><a href="!#">Nombre</a></th>
                            <th className="th-lg"><a href="!#">Fecha</a></th>
                            <th className="th-lg"><a href="!#">Episodio</a></th>
                            <th className="th-lg"><a href="!#">Personajes</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {personajes != null ? (
                            personajes.map((personaje) => (
                                <tr>
                                    <th href="!#" ><a href={`/personaje/${personaje.id}`}>{personaje.id}</a></th>
                                    <th href="!#">{personaje.name}</th>
                                    <th href="!#">{personaje.air_date}</th>
                                    <th href="!#">{personaje.episode}</th>
                                    <th href="!#">{personaje.characters}</th>
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