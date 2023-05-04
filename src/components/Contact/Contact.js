import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Row id="contact" style={{ width: "100%" }}>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <p>
          Mobile Number : <span className="purple">+91 863051990 </span>{" "}
        </p>
        <p>
          Email :  <span className="purple">sin.anurag12@gmail.com </span>{" "}
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/anurag1109"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/anuragsingh1109/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:sin.anurag12@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <SiGmail />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Contact;
