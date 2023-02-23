import React, { useState } from "react";
function AddMovie({add}) {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    poster: "",
    rating: "",
    
  });
  return <>
  <div style={{}}>
  <input type="text" placeholder="Title" onChange={(e) =>setMovie({...movie,title:e.target.value})}/>
  <input type="text" placeholder="Description" onChange={(e) =>setMovie({...movie,description:e.target.value})}/>
  <input type="text" placeholder="Rating" onChange={(e) =>setMovie({...movie,rating:e.target.value})}/>
  <input type="text" placeholder="Poster" onChange={(e) =>setMovie({...movie,poster:e.target.value})}/>
  <button onClick={()=> add(movie)}>Add A Movie</button>
  </div>
  </>;
}
export default AddMovie;
