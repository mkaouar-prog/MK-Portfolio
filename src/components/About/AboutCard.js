import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import iset from "../../Assets/iset.png";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mkaouar Achraf </span>
            from <span className="purple"> Sfax, Tunisia.</span>
            <br />
            I am currently Student at Institute of Technological Studies of Sfax.  
            <br />
       
            <center>
            <a href="https://isetsf.rnu.tn/" target="_blank" rel="noopener noreferrer">
            <img 
              src={iset} 
              className="img-fluid card" 
              style={{ width: '20%' }} 
              alt="brand" 
            />
          </a>

            </center>

            <br />
           
            I will complete my studies in 2025 as a technical software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">MK.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
