import React, { useState, useEffect } from 'react';


const Home = () => {

    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/movie_data')
        .then(res => res.json())
        .then(data => setMovieData(data))
    }, [])

    if (movieData.length == 0) {
        return(
            <div>
                still loading
            </div>
        )
    }

    console.log(movieData)

    return(
        <div>
            {movieData.map((movieData) => {
                return(
                    <div>
                        <ul>
                            <li>
                                Movie Title: {movieData.movie_title}
                            </li>
                            <li>
                                Principal Director: {movieData.director}
                            </li>
                            <li>
                                Release Year: {movieData.release_year}
                            </li>
                            <li>
                                Gross Income(adjusted for inflation): {movieData.worldwide_gross}
                            </li>
                        </ul>
                    </div>
                )})}
                

        </div>
        
    )
}

export default Home