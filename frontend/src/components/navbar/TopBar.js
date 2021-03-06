import React from 'react';
import styles from './navbar.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Container, Accordion, Modal, Button} from 'react-bootstrap'
import Popup from '../popup/Popup.js'

function TopBar(props) {

  return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Emergency Resource Alternatives (ERA)</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Navbar.Text className='warning'>If you are experiencing a life-threatening emergency, please call 911:&nbsp;&nbsp;</Navbar.Text>
          <Popup/>
        </Navbar>
      </Container>
  );
}

export default TopBar;