import React, { useEffect, useState } from "react";
import { allpersonajes } from "../functions/funciones";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from "./Pdf";

const Inicio = () => {

    const [personajes, setPersonajes] = useState(null);

    useEffect(() => {
        allpersonajes(setPersonajes);
    }, [])

    return (
        <div className="contenedor">
            <div className="content">
                <br />
                <div align="center">
                    <ReactHTMLTableToExcel
                        id="botonExportarExcel"
                        className="btn btn-warning mb-3"
                        table="api"
                        filename="futuraExcel"
                        sheet="futuraExcel"
                        buttonText="Exportar Excel"
                    />
                    <table className="table table-striped table-bordered table-hover table-dark" id="api">
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th>NOMBRE</th>
                                <th>FECHA</th>
                                <th>EPISODIO</th>
                                <th class="col-sm-6">PERSONAJES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personajes != null ? (
                                personajes.map((personaje) => (
                                    <tr>
                                        <th href="!#"><a href={`/personaje/${personaje.id}`}>{personaje.id}</a></th>
                                        <th>{personaje.name}</th>
                                        <th>{personaje.air_date}</th>
                                        <th>{personaje.episode}</th>
                                        <th>{personaje.characters}</th>
                                    </tr>
                                ))
                            ) : ('Cargando...')}
                        </tbody>
                    </table >
                </div >
                <div className="pdf" align="center">
                    <PDFDownloadLink className="btn btn-danger" document={<Pdf />} fileName="Personajes.pdf">
                        Descargar PDF
                    </PDFDownloadLink>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Inicio