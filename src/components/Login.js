import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import "./Login.css";

class Login extends React.Component {

  render() {

    return(
      
      <Container>
        <Row className="justify-content-center">
            <h2 className="text-light text-center py-3">Personal assistant</h2>
          <Col lg={4} md={5} sm={7} xs={9}>

            <Form className="text-light pt-4 px-3">

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button className="ml-2" variant="outline-light" type="submit">
                  Submit
                </Button>
              </div>
              
            </Form>  
          </Col>

        </Row>
      
      </Container>
    );
  }
}

export default Login;
