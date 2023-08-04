import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import SocialMedia from "../components/SocialMedia";

export default class Footer extends Component {
  render() {
    let date = new Date();
    let year = date.getFullYear();

    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Developed by Benyapa Zimzee</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} </h3>
          </Col>
          <Col md="4" className="footer-body">
            <SocialMedia />
          </Col>
        </Row>
      </Container>
  );
  }
}
