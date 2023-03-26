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
            <section className='home'>
                <form className='home__form' onSubmit={handleSubmit}>
                    <input className='home__input' type='text' placeholder='Search a gif' onChange={handlechange} value={keyword}/>
                    <button className='home__button' >Search</button>
                </form>
                <section className='home__section'>
                    <section className='home__lastsearch lastsearch'>
                        <h3 className='home__h3'>Última busqueda</h3>
                        <ListOfGifs gifs={gifs}/>
                    </section>
                    <section className='home__popular'>
                        <h3 className='home__h3'>Gifs populares</h3>
                        <ul className='home__ul'>
                            {
                                POPULAR_GIFS.map((popularGif) => (
                                <li className='home__li' key={popularGif}>
                                    <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
                                </li>))
                            }
                        </ul>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Home