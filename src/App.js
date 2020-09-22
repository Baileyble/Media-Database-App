import React, {useState} from 'react';
import './App.css';
import './style.css';
import axios from 'axios'
import Home from "./components/homeComponent";
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom"
import Movie from "./components/movieComponent";
import SearchResults from "./components/searchResultsComponent";


const App = () => {
    const [movieSearchResults, setMovieSearchResults] = useState([]);
    const [movie, setMovie] = useState([]);

    const getMovieByName = (title) => {
        axios({
            "method": "GET",
            "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "bd9484dfcdmsh0a55855d7a380f3p13dfb1jsnd453666912b6",
                "useQueryString": true
            }, "params": {
                "page": "1",
                "r": "json",
                "s": title
            }
        })
            .then((response) => {
                setMovieSearchResults(response.data.Search);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getMovieByID = (id) => {
        axios({
            "method": "GET",
            "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "bd9484dfcdmsh0a55855d7a380f3p13dfb1jsnd453666912b6",
                "useQueryString": true
            }, "params": {
                "i": id,
                "r": "json"
            }
        })
            .then((response) => {
                console.log(response.data)
                setMovie(response.data)

            })
            .catch((error) => {
                console.log(error)
                console.log(id)
            })
    }

    const selectMovie = (selectedMovie) => {
        getMovieByID(selectedMovie)
    }

    const resetSearch = () => {
        setMovieSearchResults([])
    }

    return (
        <Router>

            <Switch>
                <Route path={"/" + movie.imdbID}>
                    <Movie movie={movie} resetSearch={resetSearch}/>
                </Route>
                <Route path="/search">
                    <SearchResults getMovieByName={getMovieByName} selectMovie={selectMovie}
                                   movieListing={movieSearchResults} movie={movie}
                                   movieSearchResults={movieSearchResults} resetSearch={resetSearch}/>
                </Route>
                <Route path="/">
                    <Home getMovieByName={getMovieByName} movieSearchResults={movieSearchResults} movie={movie}/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
