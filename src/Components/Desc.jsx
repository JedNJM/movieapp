import React from "react";
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Desc = () => {
  // useLocation
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <>
      <Card className="text-center container-cards">
        
        <Card.Body>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Text>{movie.description}</Card.Text>
          <Card.Title>
            <img src={movie.poster} height={800} alt="error"></img>
          </Card.Title>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Desc;
