import React, { useState, useEffect } from "react";
import {Container, Card, Button, Row, Col, Offcanvas, CardGroup} from "react-bootstrap";


const api = {
  key : "27d83fbc86d9840f902119dd350b9a7a",
  base : "https://api.openweathermap.org/data/2.5/",
  img : "https://openweathermap.org/img/wn/",
  iconEnd : '@2x.png',
  lat : '20.671113',
  lon : '-103.439942',
}

const Weather = function() {
 
  const [offCanvas, setOffCanvas] = useState({show : false, weatherTitle : ''});
  const [weatherData, setWeatherData] = useState({});

  const handleShow = (date) => {
    let update = {};
    if(date === 'today'){
      update = {show : true, weatherTitle : 'The weather today'};
      setOffCanvas(update);
    } else {
      update = {show : true, weatherTitle : 'Weekly weather forecast'};
      setOffCanvas(update);
    }
  };
  const handleClose = () => setOffCanvas({show : false, weatherTitle : ''});
  
  const apiRequest = `${api.base}/onecall?lat=${api.lat}&lon=${api.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${api.key}`;
  useEffect(() => {
    console.log(apiRequest);
    fetch(apiRequest)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      setWeatherData ({
        current : data.current,
        week : data.daily
      });

    }); 

    

  }, []);

  return(
    <Container className="mt-4">
      <Row>
        <Col>
          <Button className="mx-3 btn-info" onClick={() => handleShow('today')}>Show Today Weather</Button>
          <Button className="mx-3 btn-info" onClick={() => handleShow('week')}>show the week's weather</Button>
      
          <Offcanvas show={offCanvas.show} onHide={handleClose} placement='top' style={{height : '65vh'}}>

            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{offCanvas.weatherTitle}</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex justify-content-center">

              <TodayWeather weatherData={weatherData}/>

            </Offcanvas.Body>

          </Offcanvas>
          
        </Col>
      </Row>
    </Container>
  );
};

const TodayWeather = function(props) {
  console.log(props.weatherData.current);
  return(
    <CardGroup>
      <Card style={{ width : '150px'}} className="text-center">
        <Card.Header>
          <Card.Title>Current</Card.Title>
        </Card.Header>
        <Card.Body>        
          <Card.Img src={`${api.img}${props.weatherData.current.weather[0].icon}${api.iconEnd}`} style={{width : '85%'}}/>
          <Card.Text>
            {props.weatherData.current.weather[0].description}
          </Card.Text>
          <Card.Text><div style={{fontWeight: "bold"}}>Tempture</div>{props.weatherData.current.temp}</Card.Text>
          <Card.Text><div style={{fontWeight: "bold"}}>Humidity</div>{props.weatherData.current.humidity}%</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width : '150px'}} className="text-center">
        <Card.Header>
          <Card.Title>Today</Card.Title>
        </Card.Header>
        <Card.Body>        
          <Card.Img src={`${api.img}${props.weatherData.week[0].weather[0].icon}${api.iconEnd}`} style={{width : '85%'}}/>
          <Card.Text>
            {props.weatherData.week[0].weather[0].description}
          </Card.Text>
          <Card.Text>
            <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{props.weatherData.week[0].temp.max}</Card.Text>
            <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{props.weatherData.week[0].temp.min}</Card.Text>
            <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{props.weatherData.week[0].humidity}</Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
 
export default Weather;