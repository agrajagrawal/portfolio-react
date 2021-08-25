import React from 'react';
import {Container , Row , Col} from 'react-bootstrap'
// import { DiAndroid, DiDart, DiGit } from "react-icons/di";
// import {RiFlutterFill} from "react-icons/ri"
import Zoom from '@material-ui/core/Zoom';
import {SiBootstrap, SiC, SiCplusplus, SiDart, SiFlutter, SiGit, SiJavascript, SiMongodb, SiMysql, SiNodeDotJs, SiOpensourceinitiative, SiPython, SiReact, SiSass} from "react-icons/si"
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function Badges() {
   return(
    <Container style={{ fontSize:"25px"}} >
    <h3 style={{textAlign:"center",padding:"10px"}}>Skills</h3>
    <Row>
    <h4 style={{color:"grey",paddingTop:"10px"}}>Development</h4>
    </Row>
    <Row style={{textAlign:"center",padding:"10px"}}>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiJavascript size="40px" title="Javascript"/></Col>
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiBootstrap size="40px" title="Bootstrap"/></Col>
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiSass size="40px" title="Sass"/></Col>
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiNodeDotJs size="40px" title="NodeJS"/></Col>
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiReact size="40px" title="ReactJS"/></Col>
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiMongodb size="40px" title="MongoDB"/></Col>
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiFlutter size="40px" title="Flutter"/></Col>
        
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2}style={{marginTop:"15px"}}><SiMysql size="40px" title="MySQL"/></Col>
        
        </Zoom>
        <Zoom in={true}>
        <Col xs={4} lg={2}style={{marginTop:"15px"}}><SiGit size="40px" title="Git"/></Col>
        
        </Zoom>
        <Zoom in={true} >
        <Col xs={4} lg={2}style={{marginTop:"15px"}}><SiOpensourceinitiative size="40px" title="Open Source"/></Col>
        
        </Zoom>
        
        
        

    </Row>
    {/* <Row>
    <h4 style={{color:"grey",paddingTop:"10px"}}>Data Science</h4>
    </Row>
    <Row style={{textAlign:"center",padding:"10px"}}>
        <Col xs={4} lg={2} style={{marginTop:"10px"}}><SiMicrosoftexcel size="40px" title="Javascript"/></Col>
        <Col xs={4} lg={2} style={{marginTop:"10px"}}><SiJupyter size="40px"/></Col>
        <Col xs={4} lg={2} style={{marginTop:"10px"}}><SiBootstrap size="40px"/></Col>
    </Row> */}
    <Row>
    <h4 style={{color:"grey",paddingTop:"10px"}}>Languages</h4>
    </Row>
    <Row style={{textAlign:"center",padding:"10px"}}>
    <Zoom in={true} style={{transitionDelay:"200ms"}}>
    <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiCplusplus size="40px" title="C++"/></Col>

    </Zoom>
    <Zoom in={true} style={{transitionDelay:"200ms"}}>
    <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiC size="40px" title="C"/></Col>

    </Zoom>
    <Zoom in={true} style={{transitionDelay:"200ms"}}>
    <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiPython size="40px" title="Python"/></Col>

    </Zoom>
    <Zoom in={true} style={{transitionDelay:"200ms"}}>
    <Col xs={4} lg={2} style={{marginTop:"15px"}}><SiDart size="40px" title="Dart"/></Col>

    </Zoom>
    



    </Row>
    
    
    
    

</Container>
   );
}
export default Badges;