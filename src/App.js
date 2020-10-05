import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import AppNavbar from './components/Navbars/AppNavbar';

class App extends Component {



  render() {


 
    return (
      <Router>
        
          {/* routes go here  */}
          <AppNavbar />
          {/* routes go here */}
          <Routes />
          {/* footer here  */}
         
      </Router>
    );
  }
}

export default App;
