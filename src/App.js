import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import NavScrollExample from "./Components/navbar";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Desc from "./Components/Desc";
import Home from './Components/Home';
function App() {
  
  return (
    <>
     <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/desc" element={<Desc />}></Route>
      </Routes>
      </div>
   
    </>
  );
}

export default App;
