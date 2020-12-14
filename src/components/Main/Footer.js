import React from "react";
import { Col, Row, Nav, NavLink } from "reactstrap";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <Row>
        <Col md="12">
          <Nav>
            <NavLink href="https://github.com/henriquemsouza/psn-br-prices">
              More info
            </NavLink>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
