import React from 'react'
import Gif from './Gif'

const ListOfGifs = ({gifs}) => {

    return (
        <section className='listgifs__section'>
            {
                gifs.map(({id, title, url}) => <Gif id={id} key={id} title={title} url={url}/>)
            }
        </section>
    )
}

export default ListOfGifs