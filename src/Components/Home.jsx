import React from 'react'
import MovieCard from './MovieCard';
import NavScrollExample from './navbar';
import Header from './Header';
import AddMovie from './AddMovie';
import { useState } from 'react';

const Home = () => {
    const [infos, setInfos] = useState([
        {
          title: "Thor",
          description:
            "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
          duration: "124",
          year: "2011",
          director: "Kenneth Branagh",
          cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
          rating: 1,
          imdbLink: "https://www.imdb.com/title/tt0800369/",
          poster:
            "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
        },
        {
          title: "The Shawshank Redemption",
          description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          duration: "142",
          year: "1994",
          director: "Frank Darabont",
          cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
          rating: 1,
          imdbLink: "https://www.imdb.com/title/tt0111161/",
          poster: "https://i.ebayimg.com/images/g/XxMAAOSw~zFg4aCs/s-l1600.jpg",
        },
        {
          title: "The Silence of the Lambs",
          description:
            "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          duration: "118",
          year: "1991",
          director: "Jonathan Demme",
          cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
          rating: 5,
          imdbLink: "https://www.imdb.com/title/tt0102926/",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        },
        {
          title: "Spirited Away",
          description:
            "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          duration: "125",
          year: "2001",
          director: "Hayao Miyazaki",
          cast: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
          rating: 4,
          imdbLink: "https://www.imdb.com/title/tt0245429/",
          poster:
            "https://m.media-amazon.com/images/I/412B0Cvv2GL._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Starship Troopers",
          description:
            "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
          duration: "129",
          year: "1997",
          director: "Paul Verhoeven",
          cast: ["Casper Van Dien", "Denise Richards", "Dina Meyer"],
          rating: 3,
          imdbLink: "https://www.imdb.com/title/tttt0120201/",
          poster:
            "https://m.media-amazon.com/images/I/71hb4WtXvHL._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Thor",
          description:
            "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
          duration: "124",
          year: "2011",
          director: "Kenneth Branagh",
          cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
          rating: 4,
          imdbLink: "https://www.imdb.com/title/tt0800369/",
          poster:
            "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
        },
        {
          title: "The Shawshank Redemption",
          description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          duration: "142",
          year: "1994",
          director: "Frank Darabont",
          cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
          rating: 4,
          imdbLink: "https://www.imdb.com/title/tt0111161/",
          poster: "https://i.ebayimg.com/images/g/XxMAAOSw~zFg4aCs/s-l1600.jpg",
        },
        {
          title: "The Silence of the Lambs",
          description:
            "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          duration: "118",
          year: "1991",
          director: "Jonathan Demme",
          cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
          rating: 5,
          imdbLink: "https://www.imdb.com/title/tt0102926/",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        },
        {
          title: "Spirited Away",
          description:
            "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          duration: "125",
          year: "2001",
          director: "Hayao Miyazaki",
          cast: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
          rating: 1,
          imdbLink: "https://www.imdb.com/title/tt0245429/",
          poster:
            "https://m.media-amazon.com/images/I/412B0Cvv2GL._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Starship Troopers",
          description:
            "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
          duration: "129",
          year: "1997",
          director: "Paul Verhoeven",
          cast: ["Casper Van Dien", "Denise Richards", "Dina Meyer"],
          rating: 4,
          imdbLink: "https://www.imdb.com/title/tttt0120201/",
          poster:
            "https://m.media-amazon.com/images/I/71hb4WtXvHL._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Thor",
          description:
            "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
          duration: "124",
          year: "2011",
          director: "Kenneth Branagh",
          cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
          rating: 3,
          imdbLink: "https://www.imdb.com/title/tt0800369/",
          poster:
            "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
        },
        {
          title: "The Shawshank Redemption",
          description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          duration: "142",
          year: "1994",
          director: "Frank Darabont",
          cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
          rating: 5,
          imdbLink: "https://www.imdb.com/title/tt0111161/",
          poster: "https://i.ebayimg.com/images/g/XxMAAOSw~zFg4aCs/s-l1600.jpg",
        },
        {
          title: "The Silence of the Lambs",
          description:
            "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          duration: "118",
          year: "1991",
          director: "Jonathan Demme",
          cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
          rating: 2,
          imdbLink: "https://www.imdb.com/title/tt0102926/",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        },
        {
          title: "Spirited Away",
          description:
            "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          duration: "125",
          year: "2001",
          director: "Hayao Miyazaki",
          cast: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
          rating: 2,
          imdbLink: "https://www.imdb.com/title/tt0245429/",
          poster:
            "https://m.media-amazon.com/images/I/412B0Cvv2GL._AC_UF894,1000_QL80_.jpg",
        },
        {
          title: "Starship Troopers",
          description:
            "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
          duration: "129",
          year: "1997",
          director: "Paul f",
          cast: ["Casper Van Dien", "Denise Richards", "Dina Meyer"],
          rating: 4,
          imdbLink: "https://www.imdb.com/title/tttt0120201/",
          poster:
            "https://m.media-amazon.com/images/I/71hb4WtXvHL._AC_UF894,1000_QL80_.jpg",
        },
      ]);
      const addMovie = (newMovie) => {
        setInfos([...infos, newMovie]);
      };
      const [search, setSearch] = useState("");
      const [rate, setrate] = useState(0)
      const ratingfnc=(x)=>{
        setrate(x)
      }
  return (
    <>
    <NavScrollExample setSearch={setSearch} rating={setrate}/>
    <Header />
    <AddMovie add={addMovie} />
    <div>
       <div className="container-cards">
        {infos
          .filter((el) => (el.title.includes(search) )&& (el.rating >= rate))
          .map((el) => (
            <MovieCard
              title={el.title}
              description={el.description}
              poster={el.poster}
              rating={el.rating}
            />
          ))}
      </div>
    </div></>
  )
}

export default Home
