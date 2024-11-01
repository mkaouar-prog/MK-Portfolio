import React, { useState, useEffect } from "react";
import { Container, Row , Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/ACHRAF-MKAOUAR-CV-ENG.pdf";
import pdffr from "../../Assets/../Assets/ACHRAF-MKAOUAR-CV-FR.pdf";
import pdfe from "../../Assets/../Assets/Mon_Cv_ACHRAF_MKAOUAR_ENG.pdf";
import pdffrr from "../../Assets/../Assets/Mon_Cv_ACHRAF_MKAOUAR_FR.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfe}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV/English
          </Button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <Button
            variant="primary"
            href={pdffrr}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV/Frensh
          </Button>
        </Row>
        
        

        <Row className="resume">
          <Document file={pdfe} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfe}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV/English
          </Button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <Button
            variant="primary"
            href={pdffrr}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV/Frensh
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
