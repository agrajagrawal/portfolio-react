import React from "react";
// import { Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'

function AboutUP() {
    const phone= useMediaQuery({ query: '(max-width: 550px)' });
    
    const time = new Date();
    const hours = time.getHours();
    let greet = "";
    // eslint-disable-next-line no-lone-blocks
    {
        if(hours>=16) greet="Good Evening";
        else if(hours>=11) greet="Good Afternoon" 
        else greet="Good Morning";
    }
  return (
    <Container style={ phone ? {fontSize : "1rem"} : { fontSize: "1.5rem" }}>
      <Row>
        <Col>
          <h3 style={{ textAlign: "center", padding: "8px" }}>Know Me!</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ padding: "10px 10%", marginTop: "10px" }}>
            Hey {greet},<br /> I am an undergraduate pursuing my BTech from the 
            <strong > Institute of Engineering and Technology, Lucknow </strong>
                 in Information Technology. 
                 <br/>My
            goal is not only to crack a Job but to be a Good Engineer who knows
            Every Domain.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUP;
