/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import "typeface-poppins";

// pages
 import SemsmChat from "views/SemsmChat.js";
 import LandingPage from "views/LandingPage.js";
 // others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Home" render={(props) => <LandingPage {...props} />} />
    
      <Route
        path="/chat"
        render={(props) => <SemsmChat {...props} />}
      />
  
      <Redirect to="/Home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
