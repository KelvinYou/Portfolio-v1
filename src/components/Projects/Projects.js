import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import portfolio from "../../Assets/Projects/portfolio.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="A self-introduction website created with react.js."
              ghLink="https://github.com/KelvinYou/kelvinyou.github.io"
              demoLink="https://kelvinyou.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Travel Guide: Tour Guide App"
              description="Mobile application created using Flutter with dart as programming language"
              ghLink="https://github.com/KelvinYou/fyp_tour_guide_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Travel Guide: Admin App"
              description="Another mobile application created using Flutter with dart as programming language"
              ghLink="https://github.com/KelvinYou/fyp_admin_app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
