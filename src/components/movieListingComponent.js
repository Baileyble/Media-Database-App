import React from "react";
import {Link} from "react-router-dom";

const MovieListing = (props) => {

    const {Title, Poster, Year, imdbID} = props.movieListing;

    const selectMovie = () => {
        props.selectMovie(imdbID);
        props.resetSearch();
    }

    return (
        <>
            <Link to={"/" + imdbID} >
                <div onClick={selectMovie} className="h-full flex flex-col">
                    <img className=" w-full object-cover text-white" style={{height: "400px"}} src={Poster}
                         alt={Title + "  poster"}/>
                    <div className="flex-auto h-auto bg-gray-800 rounded-md rounded-t-none p-4 self-stretch">
                        <h1 className="text-white text-xl font-semibold ">{Title}</h1>
                        <h2 className="text-white">{Year}</h2>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default MovieListing;