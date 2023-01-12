import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kelvin You </span>
            from <span className="purple"> Selangor, Malaysia.</span>
            <br />I am a <span className="purple"> Software Engineering</span> student from {" "}
            <span className="purple">Tunku Abdul Rahman University of Management Technology (TARUMT)</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Study make me happy!"{" "}
          </p>
          <footer className="blockquote-footer">Kelvin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
