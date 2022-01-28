import React, { useState } from "react";
import {Container ,Card, Button, Row, Col, Offcanvas} from "react-bootstrap";


const apiKey = {
  key: "27d83fbc86d9840f902119dd350b9a7a",
  base: "api.openweathermap.org/data/2.5/"
}

const Weather = function() {
  
  const [showTodayWheather, setShowTodayWeather] = useState(false);

  const handleClose = () => setShowTodayWeather(false);
  const handleShow = () => setShowTodayWeather(true);

  return(
    <Container className="mt-4">
      <Row>
        <Col>
          <Button onClick={handleShow}>Show Today Weather</Button>
          <Offcanvas show={showTodayWheather} onHide={handleClose} placement='top' className="h-75">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Weather</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex justify-content-center">
              <TodayWeather/>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </Container>
  );
};

const TodayWeather = function() {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
 
export default Weather;