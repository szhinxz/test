import React from "react";
import {Document} from 'react-pdf';

import { useState } from "react";
import pdfFile from './Resume.pdf'
function PDFasimg (){

    console.log(pdfFile)
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentSuccess({numPages}) {
        setNumPages(numPages)
    }
    return (
        <>
        <div className="d-flex align-items-center justify-cotent-center">
            <Document file={pdfFile}>
                <Page pageNumber="1"></Page>
            </Document>
        </div>
        </>
    )
}
export default PDFasimg