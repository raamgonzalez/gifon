import { useContext } from 'react'
import { GifsContext } from '../context/GifsContext'
import Gif from '../components/Gif'
import { useGlobalGifs } from '../hooks/useGlobalGifs'

const Detail = ({params}) => {
    
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return (
        <>
            <h2>Gifs con id {params.id}</h2>
            <Gif {...gif}/>
        </>
    )
}

export default Detail