import React from "react";
import { Container, Row, Col} from "react-bootstrap";
// import { useMediaQuery } from 'react-responsive'
import AboutUP from "./AboutUP";

import AboutDown from "./AboutDown";
function About() {
  //   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <Container style={{ color: "white" }}>
      <Row style={{ padding: "10px 20px" }}>
        <Col lg={12} xs={12} style={{ padding: "20px" }}>
          <AboutUP />
        </Col>
        
      </Row>
      <hr
          style={{
            color: "grey",
            width: "50%",
            alignItems: "center",
            marginLeft: "20%",
          }}
        />
        <AboutDown />
    </Container>
  );
}
export default About;
