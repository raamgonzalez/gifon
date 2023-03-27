import { useContext } from 'react'
import { GifsContext } from '../context/GifsContext'
import Gif from '../components/Gif'
import { useGlobalGifs } from '../hooks/useGlobalGifs'

const Detail = ({params}) => {
    
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return (
        <>
            <h3 className='Detail-title'>{gif.title}</h3>
            <Gif {...gif}/>
        </>
    )
}

export default Detail