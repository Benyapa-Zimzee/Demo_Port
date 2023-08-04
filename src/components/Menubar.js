import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar,Container,Nav} from "react-bootstrap"

export default class Menubar extends Component {
  render() {
    return (
      <Navbar className="menu menu--adsila shadow-sm mb-4" fixed='top' expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/" className='nav-link'>
                <img src='../images/logo.png' alt='' className='logo App-logo img-fluid mx-2'/>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className='navbar-nav mr-auto mt-4'>
                <li className='menu__item'>
                  <NavLink to="/" className='menu__item-name'>Home</NavLink>
                </li>
                <li className='menu__item'>
                  <NavLink to="/about" className='menu__item-name'>About</NavLink>
                </li>
                <li className='menu__item'>
                  <NavLink to="/experiences" className='menu__item-name'>Experiences</NavLink>
                </li>
                <li className='menu__item'>
                  <NavLink to="/contact" className='menu__item-name'>Contact</NavLink>
                </li>
              </ul>
            </Nav>
            <Nav>
                <NavLink to="/setting" className='nav-link'>
                    <img src='../images/setting.png' alt='' className='setting'/>
                </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
}