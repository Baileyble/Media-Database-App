import React, {useEffect} from 'react'
import MovieListing from "./movieListingComponent";
import {Link, withRouter} from "react-router-dom";
import Search from "./searchComponent";

const SearchResults = (props) => {

    useEffect(() => {
        if (props.movieListing?.length < 1) return props.history.push('/');
    })

    if (props.movieListing === undefined) {
        return (
            <div className="bg-gray-900 w-screen h-screen">
                <div className="container mx-auto px-4 xl-px-0">
                    <Link to={"/"} onClick={props.resetSearch}><h1
                        className="pt-10 text-xl sm:text-3xl text-white uppercase font-bold font-sans mb-2">Bailey's Media
                        Database</h1></Link>

                    <div className="bg-gray-800 p-4 rounded-md">

                        <Search movie={props.movie} movieSearchResults={props.movieSearchResults}
                                handleSendRequest={props.getMovieByName}/>
                    </div>

                    <h2 className="text-center font-bold text-3xl text-white py-10">No results found.</h2>

                </div>
            </div>
        )
    } else
        return (
            <div className="bg-gray-900 w-screen ">
                <div className="container mx-auto px-4 xl:px-0">
                    <Link to={"/"} onClick={props.resetSearch}><h1
                        className="pt-10 text-xl sm:text-3xl text-white uppercase font-bold font-sans mb-2">Bailey's Media
                        Database</h1></Link>

                    <div className="bg-gray-800 p-4 rounded-md">

                        <Search movie={props.movie} movieSearchResults={props.movieSearchResults}
                                handleSendRequest={props.getMovieByName}/>
                    </div>

                    <p className="mt-10 mb-2 font-semibold text-white">Showing {props.movieListing.length} results</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch pb-10" style={{gridAutoRows: "1fr"}}>
                        {
                            props.movieListing.map((movieListing) => {
                                return <MovieListing movieListing={movieListing} selectMovie={props.selectMovie}
                                                     movie={props.movie} resetSearch={props.resetSearch}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
}

export default withRouter(SearchResults);
