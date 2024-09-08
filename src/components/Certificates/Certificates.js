import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import laptopImg from "../../Assets/about.png";
import { GrCertificate } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";


function Certificates() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="project-card-view">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Certificates <strong className="purple">I earned</strong>
            </h1>
           <Row>
          <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I regularly take courses to earn <span className="purple">Certificates </span>
            from <span className="purple"> Coursera ..</span>
            <br />
           which helps me stay updated with the latest skills and knowledge in my field.
            <br />
            <br />
            <p style={{ color: "white" }}>
            Here are a few certificates I've earned recently.
        </p>
          </p>
            <ul>
              <li className="about-activity">
              <GrCertificate /> Developing Back-End Apps with Node.js and
                    Express
                    <Button
                      variant="primary"
                      href="https://www.coursera.org/account/accomplishments/certificate/WPFWVKYM52D5"
                      target="_blank"
                      style={{ marginLeft: "5px" }}
                    >
                      <CgWebsite /> &nbsp; View
                    </Button>
              </li>
             <p></p>
            <li className="about-activity">
            <GrCertificate /> SQL for Data Science
                    <Button
                      variant="primary"
                      href="https://www.coursera.org/account/accomplishments/certificate/MAR6RMCBAF5V"
                      target="_blank"
                      style={{ marginLeft: "5px" }}
                    >
                      <CgWebsite /> &nbsp; View
                    </Button>
            </li>
            <p></p>
            <li className="about-activity">
            <GrCertificate /> Object Oriented Programming in Java
                    <Button
                      variant="primary"
                      href="https://www.coursera.org/account/accomplishments/certificate/DJEEWPK5H5C5"
                      target="_blank"
                      style={{ marginLeft: "5px" }}
                    >
                      <CgWebsite /> &nbsp; View
                    </Button>
            </li>
            <p></p>
            <li className="about-activity">
            <GrCertificate /> What is Data Science?
                    <Button
                      variant="primary"
                      href="https://www.coursera.org/account/accomplishments/certificate/3VU76LCYXBCN"
                      target="_blank"
                      style={{ marginLeft: "5px" }}
                    >
                      <CgWebsite /> &nbsp; View
                    </Button>
            </li>
            <p></p>
            <li className="about-activity">
            <GrCertificate /> Introduction to Java
                    <Button
                      variant="primary"
                      href="https://www.coursera.org/account/accomplishments/certificate/HCZWFUTKRU52"
                      target="_blank"
                      style={{ marginLeft: "5px" }}
                    >
                      <CgWebsite /> &nbsp; View
                    </Button>
            </li>
          </ul>
          </blockquote>
           </Row>
           
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
     
       

     
      </Container>
    </Container>
  );
}

export default Certificates;
