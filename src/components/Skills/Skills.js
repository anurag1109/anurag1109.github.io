import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Toolstack from "./Toolstack";
import Github from "./Github";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container id="skills" fluid className="about-section">
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </Container>
    // </Container>
  );
}

export default Skills;
