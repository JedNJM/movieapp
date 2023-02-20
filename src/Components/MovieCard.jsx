import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./movidecard.css";
import React from 'react'
import ReactStars from 'react-stars'
function MovieCard({ title, description, poster,rating }) {
  return (
    <>
      <div className="text-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            style={{ height: "450px", width: "18rem" }}
            src={poster}
          />
          <div className="text-around">
            <div style={{ minHeight: 200 }}>
              <Card.Body>
                <div className="text-around">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    color2={'#ffd700'} 
                    />
                </div>
              
              </Card.Body>
            </div>
          </div>
          <Button variant="primary">Watch Now</Button>
        </Card>
      </div>
    </>
  );
}

export default MovieCard;
