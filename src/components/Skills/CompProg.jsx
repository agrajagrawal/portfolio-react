import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiCodechef,
  SiCodeforces,
  SiHackerearth,
  SiLeetcode,
} from "react-icons/si";
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Zoom } from "@material-ui/core";
function CompProg() {
  return (
    <Container style={{ fontSize: "25px" }}>
      <h3 style={{ textAlign: "center", padding: "10px" }}>Problem Solving</h3>
      <Row style={{ textAlign: "center", padding: "10px" }}>
        <Col xs={5} style={{ color: "grey", fontSize: "25px" }}>
          Platform
        </Col>
        <Col xs={7} style={{ color: "grey", fontSize: "25px" }}>
          Rating
        </Col>
      </Row>
      <a
        href="https://www.codechef.com/users/agrajagrawal"
        target="_blank"
        title="Codechef"
        className="OJ-link"
        rel="noreferrer"
      >
        <Row style={{ padding: "10px", textAlign: "center" }}>
          <Col xs={5}>
            <Zoom in={true}>
              <SiCodechef size="50px" className="OJ-link" title="Codechef" />
            </Zoom>
          </Col>
          <Col xs={7} style={{ padding: "10px" }}>
            1895
          </Col>
        </Row>
      </a>
      <a
        href="https://codeforces.com/profile/agraj_"
        target="_blank"
        className="OJ-link"
        title="Codeforces"
        rel="noreferrer"
      >
        <Row style={{ padding: "10px", textAlign: "center" }}>
          <Col xs={5}>
            <Zoom in={true}>
              <SiCodeforces
                size="50px"
                className="OJ-link"
                title="Codeforces"
              />
            </Zoom>
          </Col>
          <Col xs={7} style={{ padding: "10px" }}>
            1405
          </Col>
        </Row>
      </a>
      <a
        href="https://leetcode.com/agrajagrawal/"
        target="_blank"
        className="OJ-link"
        title="Leetcode"
        rel="noreferrer"
      >
        <Row style={{ padding: "10px", textAlign: "center" }}>
          <Col xs={5}>
            <Zoom in={true}>
              <SiLeetcode size="50px" className="OJ-link" title="Leetcode" />
            </Zoom>
          </Col>
          <Col xs={7} style={{ padding: "10px" }}>
            1625
          </Col>
        </Row>
      </a>
      <a
        href="https://www.hackerearth.com/@agraj10"
        target="_blank"
        title="HackerEarth"
        className="OJ-link"
        rel="noreferrer"
      >
        <Row style={{ padding: "10px", textAlign: "center" }}>
          <Col xs={5}>
            <Zoom in={true}>
              <SiHackerearth
                size="50px"
                className="OJ-link"
                title="HackerEarth"
              />
            </Zoom>
          </Col>
          <Col xs={7} style={{ padding: "10px" }}>
            1362
          </Col>
        </Row>
      </a>
    </Container>
  );
}
export default CompProg;
