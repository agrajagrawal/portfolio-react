import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home/Home';
import Skills from './Skills/Skills'
import About from './About/About'

function Navbar() {
    return(
        <Router>
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand" style={{paddingLeft : 20 , fontSize:30}}>Agraj Agrawal</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
               
                <Link className="nav-link" to="/about"> About Me</Link>
                
              </li>
              <li className="nav-item">
               
                <Link className="nav-link" to="/skills"> Skills</Link>
                
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    );
}

export default Navbar;