import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CompProg from './CompProg';
import { useMediaQuery } from 'react-responsive'
// import { Zoom } from '@material-ui/core';
import Badges from './Badges'
function Skills() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });
   return (
    <Container style={{color:"white"}}>
        <Row style={{padding:"20px"}}>
        <Col lg={6} xs={12} style={{padding:"20px"}}>
      <CompProg />
        </Col>
        {
          isTabletOrMobile ? <hr style={{color:"grey"}}/> : null
        }
        <Col lg={6} xs={12} style={isTabletOrMobile ? {padding:"20px"} : {padding:"20px",borderLeft:"1px solid grey"}}>
          <Badges />
        </Col>
        </Row>
    </Container>
   );
}
export default Skills;