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
import { useTranslation } from 'react-i18next';

// core components
 import TreeVisual from "../components/tree-visual/index";
 
function SemsmVisualTreeView() {
  const { t } = useTranslation();
  
  // notify();
  // React.useEffect(() => {
  //   document.body.classList.add("profile-page");
  //   return function cleanup() {
  //     document.body.classList.remove("profile-page");
  //   };
  // });

  return (
    <React.Fragment>
   
      <TreeVisual />
      
    </React.Fragment>
  );
}

export default SemsmVisualTreeView;
