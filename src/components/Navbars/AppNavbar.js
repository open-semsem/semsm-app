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
import { useTranslation } from 'react-i18next';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

  Container,
} from "reactstrap";
import { locales } from '../../config/i18n'

const logoUrl = require('../../assets/pic/logo.png');

function AppNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const changeLanguage = lng => {
    console.log(lng, 'lng');
    i18n.changeLanguage(lng);
  };
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const { t, i18n } = useTranslation();

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
  // "menu_feature": "Features",
  // "menu_pricing": "Pricing",
  // "menu_team": "Team",
  
  const mainList = [
    { name: t('menu_home'), url: "" },
    { name: t('menu_tree'), url: "tree" },
    // { name: t('menu_feature'), url: "#feature" },
    // { name: t('menu_pricing'), url: "#pricing" },
    // { name: t('menu_about'), url: "#about" },
    // { name: t('menu_team'), url: "#team" },
    // { name: t('menu_contactUs'), url: "#contactUs" },
    // { name: t('menu_subscribe'), url: "#subscribe" },
  ];
  const list = [
    { name: t('menu_home'), url: "home" },
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
            {mainList.map((menuItem, key) =>
              <NavItem key={key}>
                <NavLink to={`/${menuItem.url}`} tag={Link}>
                  {menuItem.name}
                </NavLink>
              </NavItem>


            )}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span
                  role="img"
                  aria-label="globe"
                  className="globe-icon"
                >
                  🌐
                                      </span>

                {t('language')}
              </DropdownToggle>
              <DropdownMenu right>
                {locales.map(locale => (
                  <DropdownItem key={locale.code} onClick={() => changeLanguage(locale.code)}>
                    {locale.name}

                  </DropdownItem>
                ))}

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
