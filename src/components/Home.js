import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Type from '../effects/Type';
import Particle from '../effects/Particle';

export default class Home extends Component {
  render() {
    return (
      <section>
      <Container className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header mb-5">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello everyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">I'M BENYAPA ZIMZEE</strong>
              </h1>

              <div style={{ paddingLeft: 150,paddingTop:50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col className='mt-5'>
              <img
                src='./images/me.png'
                alt="home pic"
                className="img-fluid fade-in"
                style={{ Height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
}
