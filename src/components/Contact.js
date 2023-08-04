import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container} from "react-bootstrap";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71sz9pj",
        "template_pksa7pd",
        form.current,
        "3WhfT6JarKcUWbctX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("Email is send")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
    <Container fluid className="top">
    <h1 className="write">Write me a message</h1>
      <Container className="setcen">
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label style={{fontSize:20}}>Name</label>
                <input type="text" name="user_name" />
                <label style={{fontSize:20}}>Email</label>
                <input type="email" name="user_email" />
                <label style={{fontSize:20}}>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </StyledContactForm>
      </Container>
    </Container>
  </section>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #755E56;
      color: white;
      border: none;
    }
  }
`;