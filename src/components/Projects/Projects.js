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

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Grab N Go"
              description="An E-commerce platform which is designed and developed to provide users with an online platform for buying products."
              ghLink="https://github.com/bethimanideep/loyal-elbow-6166"
              demoLink="https://comfy-longma-8589a8.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My IMDB"
              description="A Movie and TV Show website which allows users to search for
              various films, television series, podcasts, streaming content online,
              read reviews, and rate content."
              ghLink="https://github.com/anurag1109/outgoing-mine-4990-"
              demoLink="https://marvelous-moxie-e45f7c.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Youtube clone"
              description="A clone of Youtube to replicate the core functionalities of the most
              popular video-sharing platform ever."
              ghLink="https://github.com/anurag1109/potent-button-9468"
              demoLink="https://wondrous-buttercream-0bd7a4.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="engageBay"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves."
              ghLink="https://github.com/anurag1109/potent-button-9468"
              demoLink="https://wondrous-buttercream-0bd7a4.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
