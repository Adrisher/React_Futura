import React from "react";
import { PDFDownloadLink, PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
import Pdf from "./Pdf";

const PDFGenerador = ({ personajes }) => {
  const handleDownloadPDF = () => {
    const blob = (
      <Document>
        <Page>
          <Pdf data={personajes} />
        </Page>
      </Document>
    ).toBlob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.pdf";
    link.click();
  };

  return (
    <>
      <button onClick={handleDownloadPDF}>Descargar PDF</button>
    </>
  );
};

export default PDFGenerador;
