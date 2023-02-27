import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./movidecard.css";
import React from 'react'
import ReactStars from 'react-stars'
import { Link } from "react-router-dom";
function MovieCard({ title, description, poster,rating }) {
  return (
    <>
      <div className="text-around">
        <Card style={{ width: "18rem" }}>
         <Link to="/desc" state={{movie:{ title, description, poster,rating }}}> <Card.Img
            variant="top"
            style={{ height: "450px", width: "18rem" }}
            src={poster}
          /></Link>
          <div className="text-around">
            <div style={{ minHeight: 200 }}>
              <Card.Body>
                <div className="text-around">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <ReactStars
                    count={5}
                    value={rating}
                    edit={false}
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
