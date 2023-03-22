import React from 'react'

const Gif = ({ title, id, url }) => {
    return (
        <a href={`#${id}`} className='gif' key={id}>
            <h4 className='gif__h4'>{title}</h4>
            <img className='gif__img' alt={title} src={url}/> 
        </a>  
    )
}

export default Gif