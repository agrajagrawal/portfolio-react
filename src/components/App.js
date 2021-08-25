import React from 'react';
import Navbar from './Navbar';
import BackGround from './Background/BackGround';

// import BackGround2 from './BackGround2';
// import { useMediaQuery } from 'react-responsive'
function App() {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    
    <div id="wrapper">
    <Navbar className="upper"/>
    <BackGround />
    </div>
    );
    
}

export default App;
