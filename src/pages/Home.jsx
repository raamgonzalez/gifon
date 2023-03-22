import React from 'react'
import { Link } from 'wouter'

const Home = () => {

    const POPULAR_GIFS = ["Panda", "Venezuela", "Cat", "homer", "funny"]


    return (
        <>
            <h3>Gifs populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
                    </li>))
                }
            </ul>
        </>
    )
}

export default Home