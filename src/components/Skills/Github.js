import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="anurag1109"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      <Row>
        <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            <strong className="purple">Stats</strong>
          </h1>
          <img
            style={{ maxWidth: "100%" }}
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=anurag1109&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
            alt="Anurag singh"
          />
        </Col>

        <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            <strong className="purple">Streak</strong>
          </h1>
          <img
            style={{ maxWidth: "100%" }}
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=anurag1109&theme=radical&hide_border=false"
            alt="Anurag singh"
          />
        </Col>
      </Row>
      <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          <strong className="purple">Mostly used</strong>
        </h1>
        <img
          style={{ maxWidth: "70%" }}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=anurag1109&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
          alt="Anurag singh"
        />
      </Col>
    </Container>
  );
}

export default Github;
