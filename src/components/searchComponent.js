import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom';


const Search = (props) => {
    const [title, setTitle] = useState('')

    const handleInputTitle = (event) => {
        event.preventDefault()
        const title = event.target.value
        setTitle(title)
    }

    const handleSubmit = () => {
        props.handleSendRequest(title)
        setTitle('')
    }

    useEffect(() => {
        if (props.movieSearchResults === undefined || props.movieSearchResults?.length >= 1) return props.history.push('/search')
    }, [props.movieSearchResults])

    return (
        <div className="flex-row flex">
            <input placeholder="Search Movies or TV Shows" type="text" onKeyPress={(e: any) => {
                if (e.key === "Enter") return handleSubmit()
            }} onChange={handleInputTitle} className="w-3/4 flex-auto px-6 text-xs sm:text-base" value={title}/>
            <input type="button" onClick={handleSubmit}
                   className="cursor-pointer flex-auto bg-blue-500 hover:bg-blue-700 text-white font-sans font-bold py-2 px-4 rounded"
                   value="Search"/>
        </div>
    )
}

export default withRouter(Search);
