import React, { useState, useEffect } from "react";
import {Container, Card, Button, Row, Col, Offcanvas, CardGroup, Form, FormControl} from "react-bootstrap";


let api = {
  key : "27d83fbc86d9840f902119dd350b9a7a",
  base : "https://api.openweathermap.org/data/2.5/",
  img : "https://openweathermap.org/img/wn/",
  iconEnd : '@2x.png',
  lat : '20.671113',
  lon : '-103.439942',
}

const Weather = function() {
  
  const [weatherData, setWeatherData] = useState({
    show : false, 
    weatherTitle : '',
    lat : '',
    lon : '',
    time : ''
  });

  const handleShow = (e) => {

    let update = weatherData;
    let date = e.target.id;

    update.show = true;
    
    if(date === 'today'){
      update.weatherTitle = "Today's weather";
      update.time = 'today';
      setWeatherData({...update});
      getOpenWeatherData(weatherData.lat, weatherData.lon);
      // console.log(weatherData);
    } else {
      update.weatherTitle = "Week's weather";
      update.time = 'week';
      setWeatherData({...update});
      getOpenWeatherData(weatherData.lat, weatherData.lon);
    }
  };
  const handleClose = () => {
    let update = weatherData;
    update.show = false;
    setWeatherData({...update});
  };

  const handleInputChange = (e) => {
    let id = e.target.id;
    let update = weatherData;
    update[id] = e.target.value;
    setWeatherData({...update});
  }

  const getOpenWeatherData = (lat, lon) => {
    const apiRequest = `${api.base}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${api.key}`;
    // console.log(apiRequest);

    fetch(apiRequest)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      let update = weatherData;
      update.current = data.current;
      update.daily = data.daily;
      setWeatherData({...update});
      // console.log(weatherData);
    });

  };

  return(
    <Container className="mt-4">
      <Row>
        <Col>

          <Form className="mx-3 mb-3 w-25 text-light">

            <Form.Group>
              <Form.Label>Latitud</Form.Label>
              <Form.Control id="lat" onChange={handleInputChange}/>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Longitud</Form.Label>
              <Form.Control id="lon" onChange={handleInputChange}/>
            </Form.Group>
          
          </Form>
          
          <Button className="mx-3 mb-3 d-flex btn-info inline-block" id="today" onClick={(e) => handleShow(e)}>Show Today Weather</Button>
          <Button className="m-3 d-flex btn-info" id="week" onClick={(e) => handleShow(e)}>show the week's weather</Button>
      
          <Offcanvas show={weatherData.show} onHide={handleClose} placement='top' style={{height : '65vh'}}>

            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{weatherData.weatherTitle}</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex justify-content-center">

              <DisplayManager time={weatherData.time} current={weatherData.current} daily={weatherData.daily}/>

            </Offcanvas.Body>

          </Offcanvas>
        
        </Col>
      </Row>
    </Container>
  );
};

const DisplayManager = function(props) {
  // console.log(props.current);
  if (props.current && props.daily) {

    if (props.time === 'today') {
      return <TodayWeather current={props.current} daily={props.daily}/>;
    } else {
      // return <h2>En proceso</h2>;      
      return <WeekWeather daily={props.daily}/>
    }

  } else {
    return <h2>Fallo</h2>;
  }
  

}

const TodayWeather = function(props) {
  console.log(props);
  return(
    // <h2>mantenimiento</h2>
    <CardGroup>
      <Card style={{ width : '150px'}} className="text-center">
        <Card.Header>
          <Card.Title>Current</Card.Title>
        </Card.Header>
        <Card.Body>        
          <Card.Img src={`${api.img}${props.current.weather[0].icon}${api.iconEnd}`} style={{width : '85%'}}/>
          <Card.Text>
            {props.current.weather[0].description}
          </Card.Text>
          <Card.Text><div style={{fontWeight: "bold"}}>Tempture</div>{props.current.temp}</Card.Text>
          <Card.Text><div style={{fontWeight: "bold"}}>Humidity</div>{props.current.humidity}%</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width : '150px'}} className="text-center">
        <Card.Header>
          <Card.Title>Today</Card.Title>
        </Card.Header>
        <Card.Body>        
          <Card.Img src={`${api.img}${props.daily[0].weather[0].icon}${api.iconEnd}`} style={{width : '85%'}}/>
          <Card.Text>
            {props.daily[0].weather[0].description}
          </Card.Text>
          <Card.Text>
            <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{props.daily[0].temp.max}</Card.Text>
            <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{props.daily[0].temp.min}</Card.Text>
            <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{props.daily[0].humidity}</Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
      
    </CardGroup>
  );
}

const WeekWeather = function(props) {
  console.log(props.daily);
  const cards = props.daily;
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return(
    <CardGroup>
      
      {cards.map((card) => {
        
        let dayNumber = SeconsToDay(card.dt);
        let dayName = weekDays[dayNumber];

        return (
          <Card style={{ width : '150px'}} className="text-center">
          <Card.Header>
          <Card.Title>{}</Card.Title>
          <Card.Title>{dayName}</Card.Title>
          </Card.Header>
          <Card.Body>        
            <Card.Img src={`${api.img}${card.weather[0].icon}${api.iconEnd}`} style={{width : '85%'}}/>
            <Card.Text>
              {card.weather[0].description}
            </Card.Text>
            <Card.Text>
              <Card.Text><div style={{fontWeight: "bold"}}>Max tempture</div>{card.temp.max}</Card.Text>
              <Card.Text><div style={{fontWeight: "bold"}}>Min tempture</div>{card.temp.min}</Card.Text>
              <Card.Text><div style={{fontWeight: "bold"}}>Humidity</div>{card.humidity}%</Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        );  

      })}
    </CardGroup>
  );
}

const SeconsToDay = function(seconds) {
  const date = new Date(0);
  date.setUTCSeconds(seconds);
  let day = date.getUTCDay();
  return day;
  // console.log(day);
}

export default Weather;