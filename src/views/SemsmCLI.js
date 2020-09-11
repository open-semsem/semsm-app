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
// reactstrap components
import {
  // Button,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SemsmNav from "components/Navbars/SemsmNav.js";
import Semsm from "components/cli/Semsm/Semsm.js";
import WorkCycle from "components/cli/WorkCycle/index.js";
 
import Footer from "components/Footers/Footer.js";


function SemsmChat() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <SemsmNav />
      <Semsm />
      <WorkCycle />
     

      <Footer />
    </>
  );
}

export default SemsmChat;
