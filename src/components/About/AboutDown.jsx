import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";
import { Zoom , Grow} from "@material-ui/core";
function AboutDown() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 style={{ textAlign: "center", padding: "8px" }}>
            Connect With Me :)
          </h3>
        </Col>
      </Row>
      <Row style={{ padding: "10px 100px", textAlign: "center" }}>
        <Col lg={2} xs={6} style={{ padding: "10px 20px" }}>
        <Grow in={true}>
          <Button
            variant="light lg"
            href="https://bit.ly/agraj-resume"
            target="_blank"
            title="Resume"
          >
            <b>Resume</b>
          </Button>
        </Grow>
          
        </Col>
        <Col lg={2} xs={6} style={{ padding: "10px 20px" }}>
        <Grow in={true}>
          <Button
            variant="light lg"
            href="https://www.stopstalk.com/user/profile/agrajagrawal"
            title="StopStalk"
            target="_blank"
          >
            <b>StalkMe</b>
          </Button>
          </Grow>
        </Col>
        <Col lg={2} xs={12} style={{ padding: "10px 20px" }}></Col>

        <Col lg={1} xs={2} style={{ padding: "20px 30px" }}>
          <a
            href="https://www.linkedin.com/in/agrajagrawal/"
            target="_blank"
            rel="noreferrer"
          >
              <Zoom in={true}><SiLinkedin size="30px" title="Linkedin" /></Zoom>
            
          </a>
        </Col>
        <Col lg={1} xs={2} style={{ padding: "20px 30px" }}>
          <a
            
            href="mailto:agrajagrawal2018@gmail.com?subject=Mail from Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <Zoom in={true}><SiGmail size="30px" title="Mail Me" /></Zoom>
          </a>
        </Col>
        <Col lg={1} xs={2} style={{ padding: "20px 30px" }}>
          <a
            href="https://github.com/agrajagrawal"
            target="_blank"
            rel="noreferrer"
          >
              <Zoom in={true}><SiGithub size="30px" title="Github" /></Zoom>
            
          </a>
        </Col>
        
        <Col lg={1} xs={2} style={{ padding: "20px 30px" }}>
          <a
            href="https://wa.me/+918923425376"
            target="_blank"
            rel="noreferrer"
          >
              <Zoom in={true}><SiWhatsapp size="30px" title="Whatsapp" /></Zoom>
            
          </a>
        </Col>
        <Col lg={1} xs={2} style={{ padding: "20px 30px" }}>
          <a
            href="https://www.facebook.com/agrawal.agrajaron"
            target="_blank"
            rel="noreferrer"
          >
              <Zoom in={true}><SiFacebook size="30px" title="Facebook" /></Zoom>
            
          </a>
        </Col>
        <Col lg={1} xs={2} style={{ padding: "20px 30px" }}>
          <a
            href="https://www.instagram.com/agraj_agrawal/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
              <Zoom in={true}>
              <SiInstagram size="30px" title="Instagram" />
              </Zoom>
           
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutDown;
