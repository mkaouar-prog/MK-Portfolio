import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import dalil from "../../Assets/Projects/dalil.png";
import daliln from "../../Assets/Projects/daliln.png";
import luxi from "../../Assets/Projects/luxi.png";
import esps from "../../Assets/Projects/esps.png";
import book from "../../Assets/Projects/book.png";
import app from "../../Assets/Projects/a.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esps}
              isBlog={false}
              title="ESPS"
              description="Authentication of candidates and recruiters Management of job offers and candidates for recruiters Handling candidate requests"
              ghLink="https://github.com/mkaouar-prog/Esps"
              demoLink="https://youtu.be/eui0nZCj6JE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="E-Book"
              description="I created an online e-book marketplace called e-book ecommere. The platform offers a user-friendly interface, comprehensive book catalog, real-time updates, secure payments, and flexible delivery options."
              ghLink="https://github.com/mkaouar-prog/ReactProject"
              demoLink="https://youtu.be/EFE1N_NYKD4"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxi}
              isBlog={true}
              title="Luxi.tn"
              description="Development of an online platform for buying and selling: Deployment of JavaScript & Hosting and Integration of SMTP services and cloud storage on a server"
              ghLink="https://www.surfntaste.com/2019/09/luxi-petites-annonces-tunisie.html"
              demoLink="https://youtu.be/n5pIA60w3sI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Dalilaltelmidh App"
              description="I developed an Android app using Flutter, focused on providing educational content and interactive learning experiences. The app features user-friendly navigation, multimedia resources . Additionally, I integrated AdMob ads to generate revenue while maintaining a seamless user experience. I also deployed the app on the Google Play Store, making it accessible to a broader audience."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://apkcombo.com/%D8%B4%D8%B1%D8%AD-%D9%86%D8%B5-%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%AA%D9%84%D9%85%D9%8A%D8%B0/com.daliltelmidh.dalil_telidh/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daliln}
              isBlog={false}
              title="Dalilaltelmidh.net FR/ENG"
              description="Creation of educational website: Design of a Blogger template with a custom design and Integration of the AdSense service"
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
               demoLink="https://Dalilaltelmidh.NET/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dalil}
              isBlog={false}
              title="Dalilaltelmidh.com AR"
              description="Creation of educational website: Design of a Blogger template with a custom design and Integration of the AdSense service"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://Dalilaltelmidh.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
