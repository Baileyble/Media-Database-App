import Search from "./searchComponent";
import React from "react";

const Home = (props) => {

return (
    <>
    <div className="overscroll-none bg-cover bg-center bg-no-repeat w-screen h-screen" style={{backgroundImage: "url(https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
    <div className="w-screen h-screen bg-cover bg-black bg-opacity-75 flex items-center">
        <div className="container mx-auto px-4 xl:px-0">
            <h1 className="text-center text-3xl sm:text-6xl text-white uppercase font-bold font-sans">Bailey's Media Database</h1>

            <h4 className="text-center text-xs md:text-xl text-white font-sans mb-8">A React web app that pulls data from the RapidAPI IMDB Movie Database built using React.js, React Router, TailwindCSS, and Axios.</h4>
            <div className="bg-gray-900 px-4 py-4 sm:px-6 sm:py-8 rounded-md">
        <Search  movie={props.movie} movieSearchResults={props.movieSearchResults} handleSendRequest={props.getMovieByName}/>
            </div>
        </div>
    </div>
    </div>

    </>
)
}

export default Home