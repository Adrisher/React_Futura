import React, { useEffect, useState } from "react";
import { allpersonajes } from "../functions/funciones";
import { Document, Page, View, Text } from "@react-pdf/renderer";


//para utilizar esta funcion, con useEffect para cuando cargue el inicio cargue los personajes
//usestate para mostrar en pantalla 
const Pdf = ({personajes}) => {

    // const [personajes, setPersonajes] = useState(null)

    // useEffect(() => {
    //     allpersonajes(setPersonajes)
    // }, [])

    //     return (
    //         <View >
    //             <PDFDownloadLink>
    //                 <button className="btn btn-danger"> PDF</button>
    //             </PDFDownloadLink>
    //             <Document>
    //                 <Page size="A4">
    //                     <View >
    //                         <Text>ID</Text>
    //                         <Text>Nombre</Text>
    //                         <Text>Fecha</Text>
    //                         <Text>Episodio</Text>
    //                         <Text>Personajes</Text>
    //                     </View>
    //                     {personajes != null ? (
    //                         personajes.map((personaje) => (
    //                             <View>
    //                                 <Text>{personaje.id}</Text>
    //                                 <Text>{personaje.name}</Text>
    //                                 <Text>{personaje.air_date}</Text>
    //                                 <Text>{personaje.episode}</Text>
    //                                 <Text>{personaje.characters}</Text>
    //                             </View>
    //                         ))
    //                     ) : ('no hay personajes')}
    //                 </Page>
    //             </Document>
    //         </View>
    //     )
    return (
        <Document>
            <Page size="A4" style={{
                flexDirection: 'row',
                backgroundColor: '#E4E4E4'
            }}>
                <View style={{
                    margin: 10,
                    padding: 10,
                    flexGrow: 1
                }}>
                    <Text>Tabla</Text>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Fech</th>
                                <th>Episodio</th>
                                <th>Personajes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personajes != null ? (
                                personajes.map((personaje) => (
                                    <tr key={personaje.id}>
                                        <td>{personaje.name}</td>
                                        <td>{personaje.air_date}</td>
                                        <td>{personaje.episode}</td>
                                        <td>{personaje.characters}</td>
                                    </tr>
                                ))
                            ) : ('no hay personajes')}
                        </tbody>
                    </table>
                </View>
            </Page>
        </Document >
    );
}
export default Pdf