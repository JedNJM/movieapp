import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap/Card';

const Desc = () => {
    // useLocation 
const location = useLocation()
const movie=location.state.movie
  return (
    
    <div>
    <h1>MOVIE</h1>
      <h1>{movie.title}</h1>
      {/* image */}
       <img src={movie.poster} height={400} alt="error"></img>
     
      <h1>{movie.description}</h1>
</div>
  )
}

export default Desc
