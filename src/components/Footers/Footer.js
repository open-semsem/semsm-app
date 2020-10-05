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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
import { useTranslation } from 'react-i18next';

const imageUrl = require('../../assets/pic/footer@2x.png');

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer footer-black footer-white footer-img" style={{ backgroundImage: `url(${imageUrl}) ` }}>

      <Container >

        <Row >
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                   {t('app_name')}
                </a>
              </li>
              <li>
                <a
                  href="https://semsm.substack.com/"
                  target="_blank"
                >
                      {t('footer_blog')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/open-semsem"
                  target="_blank"
                >
                  <i className="fa fa-github" />
                  {t('footer_github')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()},     {t('footer_made')}{" "}
              <i className="fa fa-heart heart" />     {t('footer_team')}
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
