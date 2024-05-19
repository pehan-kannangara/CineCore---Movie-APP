import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import "./app.css";
import SearchIcon from "./search.svg";

const API_URL = "https://omdbapi.com?apikey=45d2180";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>CineCore...</h1>
      <div className="search">
        <input
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No Movies Found</div>
      )}
    </div>
  );
};

export default App;
