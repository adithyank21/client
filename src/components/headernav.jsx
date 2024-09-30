import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import commentContext from './commentProvider';
import {useContext} from 'react'
function Headernav() {
  const {comment,setcomment} = useContext(commentContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [logshow, setlogShow] = useState(false);

  const handleclose = () => setlogShow(false);
  const handleshow = () => setlogShow(true);

  return (
    <Navbar expand="lg" style={{backgroundColor:"lightblue"}}>
      <Container>
        <Navbar.Brand href="#home">kerala tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link onClick={handleShow}>Register</Nav.Link>
            <Nav.Link onClick={handleshow}>Login</Nav.Link>



           
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           <Button variant='danger' onClick={()=>{
            setcomment("test")
           }}>Test</Button>
          </Nav>
        </Navbar.Collapse>
   
        </Container>
        
        <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'150px'}}>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <input type='text' name='name' placeholder='enetername'></input>
       <br/>
       <br/>

       <input type='email' name='email' placeholder='eneteremail'></input>
       <br/>
       <br/>

       <input type='tel' name='phone' placeholder='enter phone numer'></input>
       <br/>
       <br/>

       <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Body>
       
      </Modal>
       <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'150px'}}>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <input type='text' name='name' placeholder='enetername'></input>
       <br/>
       <br/>

       <input type='email' name='email' placeholder='eneteremail'></input>
       <br/>
       <br/>

       <input type='tel' name='phone' placeholder='enter phone numer'></input>
       <br/>
       <br/>

       <Button variant="secondary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Body>
       
      </Modal>
      


      <Modal show={logshow} onHide={handleclose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'150px'}}>Login Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='email' name='email' placeholder='enter email id'></input>
          <br/>
          <br/>
          <input type='password' name='password' placeholder='enter password'></input>
          <br/>
          <br/>
          
          <Button variant="primary" onClick={handleclose}>
            Login
          </Button>
        </Modal.Body>
       
      </Modal>
    </Navbar>

  );
}

export default Headernav;