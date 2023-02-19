import React, { useEffect, useState } from "react";
import { allpersonajes } from "../functions/funciones";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

//para utilizar esta funcion, con useEffect para cuando cargue el inicio cargue los personajes
//usestate para mostrar en pantalla 
const DocuPdf = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        allpersonajes(setPersonajes)
    }, [])
    return (
        <div align="center">
            <PDFDownloadLink table="api" fileName="futura.pdf">
                <button className="btn btn-danger"> PDF</button>
            </PDFDownloadLink>
            <Document>
                <Page size="A4">
                    <View className="contenedor">
                        <table className="table table-sm" id="api">
                            <thead className="table-dark">
                                <tr>
                                    <th className="th-lg"><Text>ID</Text></th>
                                    <th className="th-lg"><Text>Nombre</Text></th>
                                    <th className="th-lg"><Text>Fecha</Text></th>
                                    <th className="th-lg"><Text>Episodio</Text></th>
                                    <th className="th-lg"><Text>Personajes</Text></th>
                                </tr>
                            </thead>
                            <tbody>
                                {personajes != null ? (
                                    personajes.map((personaje) => (
                                        <tr>
                                            <Text href="#" ><Text href={`/personaje/${personaje.id}`}>{personaje.id}</Text></Text>
                                            <th href="#">{personaje.name}</th>
                                            <th href="#">{personaje.air_date}</th>
                                            <th href="#">{personaje.episode}</th>
                                            <th href="#">{personaje.characters}</th>
                                        </tr>
                                    ))
                                ) : ('no hay personajes')}
                            </tbody>
                        </table >
                    </View>
                </Page>
            </Document>
        </div>
    )
}

export default DocuPdf