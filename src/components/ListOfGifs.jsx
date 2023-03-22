import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'
import Loading from '../ui/Loading'

const ListOfGifs = ({params}) => {

    const { keyword } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        function () {
            setLoading(true)
            getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)}
            )
        },[keyword])

    if (loading) return <Loading/>


    return (
        <section>
            {
                gifs.map(({id, title, url}) => <Gif id={id} key={id} title={title} url={url}/>)
            }
        </section>
    )
}

export default ListOfGifs