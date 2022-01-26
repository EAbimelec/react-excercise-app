import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import "./Login.css";

const users = {
  Erick : {
    password : 'contrasenagenerica'
  },

  Christian : {
    password : 'pagale mas a erick'
  }
  
}

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    let inputUsername = this.state.username

    if (users[inputUsername]) {
      if (users[inputUsername].password === this.state.password) {
        console.log('Adelante');
      } else {
        console.log('Nombre o contrasena equivocados');
      }
    } else {
      console.log('El usuario no existe');
    }
  }

  render() {

    let title = `${this.state.username}'s personal assistant`
    let usernameLength = this.state.username.length;
    return(
      
      <Container>
        <Row className="justify-content-center">

            <h2 className="text-light text-center py-3">{usernameLength ? title : 'Your personal assistant' }</h2>
          <Col lg={4} md={5} sm={7} xs={9}>

            <Form className="text-light pt-4 px-3">

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter username"
                  value={this.state.username}  
                  onChange={(e) => this.setState({username: e.target.value})}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e) => this.setState({password: e.target.value})}
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button 
                  className="ml-2" 
                  variant="outline-light" 
                  type="submit"
                  onClick={(e) => this.login(e)}
                  >
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
