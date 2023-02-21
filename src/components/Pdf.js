import React, { useEffect, useState } from "react";
import { allpersonajes } from "../functions/funciones";
import { Document, Page, View, Text } from "@react-pdf/renderer";

const Pdf = () => {

    const [personajes, setPersonajes] = useState(null)

    useEffect(() => {
        allpersonajes(setPersonajes)
    }, [])

    return (
        <Document>
            <Page size="A4" style={{
                flexDirection: 'row',
                backgroundColor: '#D0D3D4'
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <table>
                        <thead>
                            <tr>
                                <Text>ID</Text>
                                <Text>Nombre</Text>
                                <Text>Fech</Text>
                                <Text>Episodio</Text>
                                <Text>Personajes</Text>
                            </tr>
                        </thead>
                        <tbody>
                            {personajes != null ? (
                                personajes.map((personaje) => (
                                    <tr key={personaje.id}>
                                        <Text>{personaje.name}</Text>
                                        <Text>{personaje.air_date}</Text>
                                        <Text>{personaje.episode}</Text>
                                        <Text>{personaje.characters}</Text>
                                    </tr>
                                ))
                            ) : ("")}
                        </tbody>
                    </table>
                </View>
            </Page>
        </Document >
    );
}
export default Pdf;