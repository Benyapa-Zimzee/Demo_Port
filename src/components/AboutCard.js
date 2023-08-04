import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} className="spoiler">
            Hi Everyone, I am <span className="purple">Benyapa Zimzee </span>
            from <span className="purple"> Chonburi, Thailand.</span>
            <br />
            I'm student that love to code very much.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3 and desktop app using Python.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="acti">
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing code
            </li>
            <li className="about-activity">
              <ImPointRight /> Shopping
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;