import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../components/ListOfGifs'
import useGifs from '../hooks/useGifs'

const POPULAR_GIFS = ["Panda", "Venezuela", "Cat", "homer", "funny"]

const Home = () => {


    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()


    const handleSubmit = evt =>{
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handlechange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search a gif here...' onChange={handlechange} value={keyword}/>
                <button>Search</button>
            </form>
            <h3 className='seacrh__h3'>Última busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className='popular__h3'>Gifs populares</h3>
            <ul className='popular__ul'>
                {
                    POPULAR_GIFS.map((popularGif) => (
                    <li className='popular__li' key={popularGif}>
                        <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
                    </li>))
                }
            </ul>
        </>
    )
}

export default Home