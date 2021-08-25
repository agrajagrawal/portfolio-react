// import { func } from 'prop-types';
import React from "react";
// import coder from "../../Assets/my-image.jpeg";
import boy from "../../Assets/boy3.png";
import {Grow} from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Type from "./Type";
function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  return (
    <Container style={{ padding: 50, paddingTop: 130, color: "white" }}>
      <Row>
        {isTabletOrMobile ? null : (
          <Col>
            <Grow in={true}>
              <img src={boy} className="img-fluid" alt="kya likhu" />
            </Grow>
          </Col>
        )}
        <Col>
          <h3 style={{ marginTop: "50px", paddingBottom: "15px" }}>
            Hi There,
          </h3>
          <h1 style={{ paddingBottom: 15 }}>
            I am
            <strong> Agraj Agrawal</strong>
          </h1>
          <div style={{ textAlign: "left", fontSize: 30 }}>
            <Type />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
