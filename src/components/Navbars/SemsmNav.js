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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
const logoUrl = require('../../assets/pic/logo.png');

function SemsmNav() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const list = [
    { name: 'HOME', url: "home" },
    { name: 'SEMSM BOT', url: "semsm-bot" },
    { name: 'SEMSM CLI', url: "Semsm-cli" },  
  ];
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/home"
            target="_blank"
            title="Semsm App"
            tag={Link}
          >

         <img className="logo"
         alt="Semsm"
         src={logoUrl}

       />          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          {list.map((menuItem, key) =>
              <NavItem key={key}>
              <NavLink to={`/${menuItem.url}`} tag={Link}>
            {menuItem.name}
              </NavLink>
            </NavItem>  
           
            )}
          
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default SemsmNav;
