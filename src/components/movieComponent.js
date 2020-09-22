import React from "react";
import {Link} from "react-router-dom";

const Movie = (props) => {

    const {Actors, Awards, BoxOffice, Country, DVD, Director, Genre, Language, Metascore, Plot, Poster, Production, Rated, Released, Response, Runtime, Title, Type, Website, Writer, Year, imdbRating, imdbVotes} = props.movie;


    return (
        <>
            <div className="bg-gray-900 sm:h-screen">
                <div className="container mx-auto px-4 py-10 xl:px-0">
                    <Link to={"/"} onClick={props.resetSearch}><h1
                        className="pb-2 text-xl sm:text-3xl text-white uppercase font-bold font-sans mb-2">Bailey's Media
                        Database</h1></Link>
                    <div className="grid-cols-1 sm:grid-rows-3 sm:grid-cols-3 sm:gap-4 grid">
                        <div className="bg-gray-800 rounded-md p-4 col-span-1 row-end-1 inline-block mb-4 sm:mb-0">
                            <img className="w-full" alt={Title + "  poster"} src={Poster}/>
                        </div>
                        <div className="bg-gray-800 rounded-md p-8 row-span-3 col-span-2 inline-block">
                            <h1 className="text-3xl lg:text-5xl text-white ">{Title} ({Year})</h1>
                            <p className="text-white  text-lg sm:text-xl font-bold ">★ {imdbRating} - <span
                                className="font-normal">{imdbVotes}</span></p>

                            <p className="text-white font-light mt-2">{Rated} | {Runtime} | {Genre} | {Released}</p>

                            <p className="text-white mt-4 font-normal">{Plot}</p>

                            <p className="text-white mt-4 font-normal mb-1"><span
                                className="font-bold">Director:</span> {Director}</p>
                            <p className="text-white font-normal mb-1"><span className="font-bold">Writers:</span> {Writer}
                            </p>
                            <p className="text-white font-normal mb-1"><span className="font-bold">Stars:</span> {Actors}</p>
                            <p className="text-white font-normal mb-1"><span className="font-bold">Awards:</span> {Awards}
                            </p>
                            <p className="text-white font-normal mb-1"><span
                                className="font-bold">Box Office:</span> {BoxOffice}</p>
                            <p className="text-white font-normal mb-1"><span className="font-bold">Country:</span> {Country}
                            </p>
                            <p className="text-white font-normal mb-1"><span className="font-bold">DVD:</span> {DVD}</p>
                            <p className="text-white font-normal mb-1"><span
                                className="font-bold">Language:</span> {Language}</p>
                            <p className="text-white font-normal mb-1"><span
                                className="font-bold">Metascore:</span> {Metascore}</p>
                            <p className="text-white font-normal mb-1"><span
                                className="font-bold">Production:</span> {Production}</p>
                            <p className="text-white font-normal mb-1"><span className="font-bold">Type:</span> {Type}</p>
                            <p className="text-white font-normal"><span className="font-bold">Website:</span> {Website}
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Movie;